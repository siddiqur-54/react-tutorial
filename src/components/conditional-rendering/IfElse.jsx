import React from 'react';

const LoginStatusBtn = (status) => {
    if (status) {
        return <button>Logout</button>
    }
    else {
        return <button>Login</button>
    }
}

const IfElse = () => {
    return (
        <div>
            <h3>Login Status</h3>
            {LoginStatusBtn(false)}
        </div>
    );
};

export default IfElse;