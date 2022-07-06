import React from 'react';
import { getChangeNameButton, StateContext } from './App';

export default function ContextTest() {
    const [state, setState] = React.useContext(StateContext);

    return (
        <div>
            {getChangeNameButton('Man', state, setState)}
            <p>Hey {state.player.name}</p>
        </div>
    );
}
