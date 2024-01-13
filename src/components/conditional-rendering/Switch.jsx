import React from 'react';

const Switch = () => {

    const isLoggedIn = false;

    switch (isLoggedIn) {
        case true:
            return <button>Logout</button>
        case false:
            return <button>Login</button>
        default:
            return null
    }
};

export default Switch;