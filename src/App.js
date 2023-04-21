import { createContext, Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './layouts';

export const ThemeContext = createContext('light');

function App() {
    const [theme, setTheme] = useState('light');
    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    if (theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    (<ThemeContext.Provider value={theme}>
                                        {route.layout ? (
                                            <Layout handleChangeTheme={handleChangeTheme}>
                                                <Page />
                                            </Layout>
                                        ) : (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        )}
                                    </ThemeContext.Provider>)
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}
export default App;
