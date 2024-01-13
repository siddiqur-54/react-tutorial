import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom"
import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import ProfilePage from '../../pages/ProfilePage';
import NotFound from '../../pages/NotFound';

const HashRouterRoute = () => {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/product/:id/:name" element={<ProductPage/>}></Route>
                    <Route path="/profile/:facebookId/:youtubeId" element={<ProfilePage/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </HashRouter>
        </div>
    );
};

export default HashRouterRoute;