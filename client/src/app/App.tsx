import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Helmet } from 'react-helmet';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import s from './app.module.sass';

// COMPONENT IMPORTS
import { Footer } from 'widgets/Footer';
import { Navigation } from 'widgets/Navigation';
import { Sidebar } from 'widgets/Sidebar';
import { Main } from 'pages/Main';
import { Error404 } from 'pages/Error404/Error404';
import { About } from 'pages/About/';
import { Contacts } from 'pages/Contacts';

const App = () => {
    return (
        <div className='App'>
            {/* Тут в шлеме ошибка UNSAFE_componentWillMount  */}
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
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

export default App;