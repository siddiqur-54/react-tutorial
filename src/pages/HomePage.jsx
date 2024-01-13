import React from 'react';
import LinkNavigation from '../components/router-dom/LinkNavigation';
import NavLinkNavigation from '../components/router-dom/NavLinkNavigation';

const HomePage = () => {
    return (
        <div>
            <LinkNavigation/>
            <NavLinkNavigation/>
            <h4>This is Home Page</h4>
        </div>
    );
};

export default HomePage;