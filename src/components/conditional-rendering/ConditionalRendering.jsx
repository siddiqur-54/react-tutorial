import React from 'react';
import InlineIfElse from './InlineIfElse';
import ImmediatelyInvoked from './ImmediatelyInvoked';
import LoopInside from './LoopInside';
import IfElse from './IfElse';
import Switch from './Switch';

const ConditionalRendering = () => {
    return (
        <>
            <h3>Inline If Else</h3>
            <InlineIfElse/>

            <h3>Immediately Invoked</h3>
            <ImmediatelyInvoked/>

            <h3>Loop Inside</h3>
            <LoopInside/>

            <h3>If Else</h3>
            <IfElse/>

            <h3>Switch</h3>
            <Switch/>
        </>
    );
};

export default ConditionalRendering;