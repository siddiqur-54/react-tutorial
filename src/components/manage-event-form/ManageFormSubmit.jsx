import React from 'react';

const ManageFormSubmit = () => {

    function SubmitForm(event) {
        event.preventDefault();
        alert('Button is Clicked');
    }

    return (
        <form onSubmit={SubmitForm}>
            <input/>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ManageFormSubmit;