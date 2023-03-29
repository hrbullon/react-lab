import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import routes from '../routes/routes';

export const AppRouter = () => { 

    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    {
                        routes.map( route => {
                            return <Route key={ route.name.toLowerCase } path={ route.path } element={ <route.component/> } />
                        })
                    }
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}