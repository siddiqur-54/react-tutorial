import React from 'react';
import CountChange from './CountChange';
import ObjectChange from './ObjectChange';
import TodoList from './TodoList';
import FormManage from './FormManage';

const UseState = () => {
    return (
        <div>  
            <h3>Count Number Change</h3>
            <CountChange/>

            <h3>Object Change</h3>
            <ObjectChange/>

            <h3>Todo List</h3>
            <TodoList/>

            <h3>Form Manage</h3>
            <FormManage/>
        </div>
    );
};

export default UseState;