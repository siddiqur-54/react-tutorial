import React, { useRef } from 'react';

const CachingComputation = () => {

    const expensiveResultRef = useRef(null);
    const myDiv = useRef(null);

    const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products/1');
        expensiveResultRef.current = await response.json();
    }

    const showData = () => {
        myDiv.current.innerHTML = JSON.stringify(expensiveResultRef.current);
    }

    return (
        <div>
            <div ref={myDiv}></div>
            <button onClick={showData}>Show Data</button>
            <button onClick={fetchData}>Call API</button>
        </div>
    );
};

export default CachingComputation;