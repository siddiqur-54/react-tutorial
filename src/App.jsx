import React from 'react';
import ConditionalRendering from './components/conditional-rendering/ConditionalRendering';
import PassingProperties from './components/passing-propoerties/PassingProperties';
import ManageEventForm from './components/manage-event-form/ManageEventForm';
import UseRef from './components/use-ref/UseRef';
import UseState from './components/use-state/UseState';
import UseEffect from './components/use-effect/UseEffect';
import RouterDom from './components/router-dom/RouterDom';

const App = () => {
    return (
        <div>
            <h1><b>React Tutorial</b></h1>
            <hr /> <hr />

            <h2><b>Conditional Rendering</b></h2>
            <hr />
            <ConditionalRendering/>
            <hr /> <hr />

            <h2><b>Passing Properties</b></h2>
            <hr />
            <PassingProperties/>
            <hr /> <hr />

            <h2><b>Manage Event & Form</b></h2>
            <hr />
            <ManageEventForm/>
            <hr /> <hr />

            <h2><b>useRef()</b></h2>
            <hr />
            <UseRef/>
            <hr /> <hr />

            <h2><b>useState()</b></h2>
            <hr />
            <UseState/>
            <hr /> <hr />

            <h2><b>useEffect()</b></h2>
            <hr />
            <UseEffect/>
            <hr /> <hr />

            <h2><b>Router DOM</b></h2>
            <hr />
            <RouterDom/>
            <hr /> <hr />
        </div>
    );
};

export default App;