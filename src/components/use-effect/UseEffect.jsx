import React from 'react';
import AttributeCall from './AttributeCall';
import APIFetchPromises from './APIFetchPromises';
import APIFetchAsyncAwait from './APIFetchAsyncAwait';

const UseEffect = () => {
    return (
        <div>
            <h3>Attribute Calling</h3>
            <AttributeCall/>

            <h3>API Fetch Using Promises</h3>
            <APIFetchPromises/>

            <h3>API Fetch Using Async Await</h3>
            <APIFetchAsyncAwait/> 
        </div>
    );
};

export default UseEffect;