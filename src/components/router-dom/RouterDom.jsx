import React from 'react';
import BrowserRouterRoute from './BrowserRouterRoute';
import HashRouterRoute from './HashRouterRoute';

const RouterDom = () => {
    return (
        <div>
            <h3>Browser Router Dom</h3>
            <BrowserRouterRoute/>

            <h3>Hash Router Dom</h3>
            <HashRouterRoute/>
        </div>
    );
};

export default RouterDom;