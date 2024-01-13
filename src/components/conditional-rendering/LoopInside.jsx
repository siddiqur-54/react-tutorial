import React from 'react';

const LoopInside = () => {

    let item = ['A', 'B', 'C', 'D'];

    return (
        <div>
            <select>
                {
                    item.map((item, i)=>{
                        return <option key={i.toString()}>{item}</option>
                    })
                }
            </select>
        </div>
    );
};

export default LoopInside;