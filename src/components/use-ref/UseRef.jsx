import React from 'react';
import InnerTextHtml from './InnerTextHtml';
import AttributeValueChange from './AttributeValueChange';
import InputElement from './InputElement';
import CSSClass from './CSSClass';
import PersistedMutableValue from './PersistedMutableValue';
import CachingComputation from './CachingComputation';

const UseRef = () => {
    return (
        <div>
            <h3>Inner Text & HTML</h3>
            <InnerTextHtml/>

            <h3>Attribute Value Change</h3>
            <AttributeValueChange/>

            <h3>Input Element</h3>
            <InputElement/>

            <h3>CSS Class Add & Remove</h3>
            <CSSClass/>

            <h3>Persisted Mutable Value</h3>
            <PersistedMutableValue/>

            <h3>Caching Expensive Computation</h3>
            <CachingComputation/> 
        </div>
    );
};

export default UseRef;