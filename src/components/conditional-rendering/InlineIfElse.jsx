import React from 'react';

const InlineIfElse = () => {

    let mark = 80;

    return (
        <div>
            {
                mark >= 80?
                <p>Brilliant Result</p>
                :
                <p>Average Result</p>
            }
        </div>
    );
};

export default InlineIfElse;