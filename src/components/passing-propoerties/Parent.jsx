import React from 'react';
import SimpleData from './SimpleData';
import ObjectData from './ObjectData';
import Function from './Function';

const Parent = () => {

    const handleClick = () => {
        alert('Button Clicked');
    }

    const Object = {
        "name" : "Amazfit",
        "description" : "This is a smart watch",
        "price" : 5500,
    }

    return (
        <div>
            <h3>Passing Simple Data</h3>
            <SimpleData title="Learn React" description="React is very powerful" time={new Date().getTime()}/>

            <h3>Passing Object Data</h3>
            <ObjectData item={Object}/>

            <h3>Passing Function</h3>
            <Function handleClick={handleClick}/>
        </div>
    );
};

export default Parent;