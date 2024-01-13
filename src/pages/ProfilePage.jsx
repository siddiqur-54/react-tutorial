import React from 'react';
import LinkNavigation from '../components/router-dom/LinkNavigation';
import NavLinkNavigation from '../components/router-dom/NavLinkNavigation';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {

    let {facebookId, youtubeId} = useParams();

    return (
        <div>
            <LinkNavigation/>
            <NavLinkNavigation/>
            <h4>This is Profile Page</h4>
            <p>Facebook : {facebookId}</p>
            <p>Youtube : {youtubeId}</p>
        </div>
    );
};

export default ProfilePage;