import React, { useEffect } from 'react';

const AttributeCall = () => {

    useEffect(()=>{
        console.log('Hello Effect')
    }, [1,2,3,4])

    return (
        <div>
            
        </div>
    );
};

export default AttributeCall;