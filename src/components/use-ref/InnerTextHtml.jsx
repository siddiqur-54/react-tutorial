import React, { useRef } from 'react';

const InnerTextHtml = () => {

    let headLine1 = useRef();
    let headLine2 = useRef();

    const Change = () => {
        headLine1.current.innerText = "Hello useRef";
        headLine2.innerHTML = "<p>This is useRef</p>"
    }

    return (
        <div>
            <h3 ref={headLine1}></h3>
            <h3 ref={(hl)=>headLine2=hl}></h3>
            <button onClick={Change}>Click</button>
        </div>
    );
};

export default InnerTextHtml;