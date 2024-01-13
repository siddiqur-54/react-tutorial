import React from 'react';
import LinkNavigation from '../components/router-dom/LinkNavigation';
import NavLinkNavigation from '../components/router-dom/NavLinkNavigation';
import { useParams } from 'react-router-dom';

const ProductPage = () => {

    let {id, name} = useParams();

    return (
        <div>
            <LinkNavigation/>
            <NavLinkNavigation/>
            <h4>This is Product Page</h4>
            <p>ID : {id}</p>
            <p>Name : {name}</p>
        </div>
    );
};

export default ProductPage;