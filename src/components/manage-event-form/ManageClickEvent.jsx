import React from 'react';

const ManageClickEvent = () => {

    function handleClick() {
        alert('Button is Clicked');
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>

            <button onClick={function handleClick() {
                alert('Button is Clicked');
            }}
            >Click
            </button>

            <button onClick={()=>{
                alert('Button is Clicked')
            }} >
                Click
            </button>

            {/* <button onClick={alert('Button is Clicked')}>Click</button> */}

        </div>
    );
};

export default ManageClickEvent;