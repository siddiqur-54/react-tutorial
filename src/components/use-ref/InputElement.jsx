import React, { useRef } from 'react';

const InputElement = () => {

    let demoRef = useRef();

    const Change=()=>{
        demoRef.focus();
        let inputValue = demoRef.value;
        alert(inputValue);
        demoRef.value = "New Value"
    }

    return (
        <div>
            <input ref={(input)=>demoRef=input}/>
            <button onClick={()=>Change()}>Submit</button>
        </div>
    );
};

export default InputElement;