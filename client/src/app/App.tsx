import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import s from './app.module.sass';

// COMPONENT IMPORTS
import { Article } from 'pages/Article/Article';
import { Footer } from 'widgets/Footer';
import { Navigation } from 'widgets/Navigation';
import { Sidebar } from 'widgets/Sidebar';
import { Main } from 'pages/Main';
import { Error404 } from 'pages/Error404/Error404';
import { About } from 'pages/About/';
import { Contacts } from 'pages/Contacts';
import { Articles } from 'pages/Articles';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import InfoStore from 'entities/stores/InfoStore';
import ObjectsStore from 'entities/stores/ObjectsStore';

const App = observer(() => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function initializeApp() {
            try {
                await InfoStore.fetchInfo();
                await ObjectsStore.fetchObjects();

                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        initializeApp();
    }, []);

    console.log('test');

    return (
        <div className='App'>
            {!isLoading
                ? (
                    <div>
                        <HelmetProvider>
                            <Helmet>
                                <meta charSet="utf-8" />
                                <title>НИИ ГХС</title>
                                <link rel="canonical" href="http://mysite.com/example" />
                            </Helmet>
                        </HelmetProvider>
                        <Router>
                            <Navigation />
                            <div className={s.content__wrapper}>
                                <div className={s.content}>
                                    <Sidebar />
                                    <Routes>
                                        <Route
                                            path='/'
                                            element={<Main />}
                                        />
                                        <Route
                                            path='/about'
                                            element={<About />}
                                        />
                                        <Route
                                            path='/contacts'
                                            element={<Contacts />}
                                        />
                                        {/* COMPONENT ROUTES */}
                                        <Route path='/article/:id' element={<Article />} />
                                        <Route
                                            path='/articles'
                                            element={<Articles />}
                                        />
                                        <Route path='*' element={<Error404 />} />
                                    </Routes>
                                </div>
                            </div>
                            <Footer />
                        </Router>
                    </div>)
                : <div>член</div>
            }
        </div>
    );
});

export default React.memo(App);