import React, { useRef } from 'react';

const CSSClass = () => {

    let demoRef = useRef();

    const Change=()=>{
        demoRef.classList.add('text-primary')
        demoRef.classList.remove('text-success')
    }

    return (
        <div>
            <h3 className='text-success' ref={(h3)=>demoRef=h3}>Learn React JS</h3>
            <button onClick={()=>Change()}>Change</button>
        </div>
    );
};

export default CSSClass;