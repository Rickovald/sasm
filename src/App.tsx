import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// COMPONENT IMPORTS
import { Main } from 'pages/Main/Main';
import { Footer } from 'components/Footer/Footer';
import { Navigation } from 'components/Navigation/Navigation';
import { Error404 } from './pages/Error404/Error404';
import { About } from './pages/About/About';
import { Contacts } from './pages/Contacts/Contacts';

const App = () => {
    return (
        <div className='App'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Page title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Router>
                <Navigation />
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
                <Footer />
            </Router>
        </div>
    );
};

export default App;