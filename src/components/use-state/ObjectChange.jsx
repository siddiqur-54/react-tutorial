import React, { useState } from 'react';

const ObjectChange = () => {

    const [myObject, setMyObject] = useState({
        key1 : 'value1',
        key2 : 'value2',
        key3 : 'value3'
    });

    const updateObject = () => {
        setMyObject(prevObject => ({
            ...prevObject,
            key1 : 'new value'
        }))
    }

    return (
        <div>
            <h4>{myObject.key1}</h4>
            <button onClick={()=>updateObject()}>Change</button>
        </div>
    );
};

export default ObjectChange;