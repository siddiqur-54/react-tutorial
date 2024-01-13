import React, { useEffect, useState } from 'react';

const APIFetchAsyncAwait = () => {

    const [Data, SetData] = useState([]);

    useEffect(()=>{

        (async () => {
            let response = await fetch('https://dummyjson.com/products/1')
            let result = await response.json();
            SetData(result);
        })()
        
    },[])

    return (
        <div>
            {JSON.stringify(Data)}
        </div>
    );
};

export default APIFetchAsyncAwait;