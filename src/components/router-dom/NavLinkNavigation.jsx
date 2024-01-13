import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkNavigation = () => {
    return (
        <div>
            <h4>Nav Link Navigation</h4>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/product/10/smart phone">Product</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/Profile/siddiqur/sid">Profile</NavLink></li>
            </ul>
        </div>
    );
};

export default NavLinkNavigation;