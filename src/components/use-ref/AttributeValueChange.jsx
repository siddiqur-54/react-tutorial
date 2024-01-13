import React, { useRef } from 'react';

const AttributeValueChange = () => {

    let demoRef = useRef(null);

    const Change=()=>{
        demoRef.current.src = "https://picsum.photos/200/300/?blur"
        demoRef.current.setAttribute("height", "200px")
        demoRef.current.setAttribute("width", "200px")
    }

    return (
        <div>
            <img src="https://picsum.photos/200/300" ref={demoRef}/>
            <button onClick={()=>Change()}>Submit</button>
        </div>
    );
};

export default AttributeValueChange;