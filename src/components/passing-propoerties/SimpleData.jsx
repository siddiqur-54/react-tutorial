import React from 'react';

const SimpleData = (props) => {
    return (
        <div>
            <h4>Q; What time is the title?</h4>
            <h6>A: The title is "{props.title}"</h6>
            <h4>Q; What time is the description?</h4>
            <h6>A: The description is "{props.description}"</h6>
            <h4>Q; What time is it now?</h4>
            <h6>A: It is {props.time} O'Clock</h6>
        </div>
    );
};

export default SimpleData;