import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import ProfilePage from '../../pages/ProfilePage';
import NotFound from '../../pages/NotFound';

const BrowserRouterRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/product/:id/:name" element={<ProductPage/>}></Route>
                    <Route path="/profile/:facebookId/:youtubeId" element={<ProfilePage/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default BrowserRouterRoute;