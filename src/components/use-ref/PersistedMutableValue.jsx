import React, { useRef } from 'react';

const PersistedMutableValue = () => {

    let demoRef = useRef(0);
    const Change=()=>{
        demoRef.current++
        console.log(`Clicked ${demoRef.current} times`);
    }

    return (
        <div>
            <h3></h3>
            <button onClick={()=>Change()}>Change</button>
        </div>
    );
};

export default PersistedMutableValue;