import React, { useState } from 'react';

const CountChange = () => {

    const [number, setNumber] = useState(0);

    const incrementNumber = () =>{
        setNumber(number+1)
    }

    const decrementNumber = () =>{
        setNumber(number-1)
    }

    return (
        <div>
            <h4>Number: {number}</h4>
            <button onClick={()=>incrementNumber()}>Increment</button>
            <button onClick={()=>decrementNumber()}>Decrement</button>
        </div>
    );
};

export default CountChange;