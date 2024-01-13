import React from 'react';

const ObjectData = (props) => {
    return (
        <div>
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Description: {props.item['description']}</li>
                <li>Price: {props.item['price']}</li>
            </ul>
        </div>
    );
};

export default ObjectData;