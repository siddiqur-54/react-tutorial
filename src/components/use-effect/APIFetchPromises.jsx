import React, {useEffect, useState } from 'react';

const APIFetchPromises = () => {

    const [Data, SetData] = useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => SetData(json))
    },[])

    return (
        <div>
            {JSON.stringify(Data)}
        </div>
    );
};

export default APIFetchPromises;