import React, { useState } from 'react';

const FormManage = () => {

    let [FormValue, SetFormValue] = useState({
        fname:"",
        lname:"",
        city:"",
        gender:""
    });

    const InputOnChange = (InputName, InputValue) => {
        SetFormValue(prevValue => ({
            ...prevValue,
            [InputName] : InputValue
        }));
    }

    const FormSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(FormValue))
    }

    return (
        <div>
            <form onSubmit={FormSubmit}>
            <input placeholder='First Name' onChange={(e)=> InputOnChange('fname', e.target.value)} value={FormValue.fname}/>
            <input placeholder='Last Name' onChange={(e)=> InputOnChange('lname', e.target.value)} value={FormValue.lname}/>
            <select value={FormValue.city} onChange={(e)=> InputOnChange('city', e.target.value)}>
                <option value="">Select City</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Rajshahi">Rajshahi</option>
            </select>
            <input checked = {FormValue.gender === "Male"} onChange={(e)=> InputOnChange('gender', 'Male')} type="radio" name="gender"/> Male 
            <input checked = {FormValue.gender === "Female"} onChange={(e)=> InputOnChange('gender', 'Female')} type="radio" name="gender"/> Female
            <br />
            <button type='submit'>Submit</button>
        </form>
        </div>
    );
};

export default FormManage;