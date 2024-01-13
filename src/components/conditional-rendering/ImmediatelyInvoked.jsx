import React from 'react';

const ImmediatelyInvoked = () => {

    let mark = 80;

    return (
        <div>
            {(()=>{
                if (mark >= 80) {
                    return <p>Brilliant Result</p>
                }
                else {
                    return <p>Average Result</p>
                }
            })()}
        </div>
    );
};

export default ImmediatelyInvoked;