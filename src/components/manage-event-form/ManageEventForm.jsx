import React from 'react';
import ManageClickEvent from './ManageClickEvent';
import ManageFormSubmit from './ManageFormSubmit';

const ManageEventForm = () => {
    return (
        <div>
            <h3>Manage Click Event</h3>
            <ManageClickEvent/>

            <h3>Manage Form Submit</h3>
            <ManageFormSubmit/>
        </div>
    );
};

export default ManageEventForm;