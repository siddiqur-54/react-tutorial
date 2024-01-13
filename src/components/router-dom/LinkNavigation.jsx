import React from 'react';
import { Link } from 'react-router-dom';

const LinkNavigation = () => {
    return (
        <div>
            <h4>Link Navigation</h4>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product/10/smart phone">Product</Link></li>
                <li><Link to="/Profile/siddiqur/sid">Profile</Link></li>
            </ul>
        </div>
    );
};

export default LinkNavigation;