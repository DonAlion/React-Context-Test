import produce from 'immer';
import React from 'react';
import { getChangeNameButton, StateContext, StateDispatchContext } from './App';

export default function ContextTest() {
    const state = React.useContext(StateContext);
    const setState = React.useContext(StateDispatchContext);

    const changeName = React.useCallback((id) => {
        setState(
            produce((draft: any) => {
                draft.player.name = 'Wendy';
            }),
        );
    }, []);

    return (
        <div>
            {getChangeNameButton('Man', state, setState)}
            <p>Hey {state.player.name}</p>
        </div>
    );
}
