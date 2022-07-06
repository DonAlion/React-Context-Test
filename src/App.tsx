/**
 * The main component handles the highest-level routing of pages based on user interaction.
 * See EPages.tsx for page options and PageSlice.tsx for page store management.
 */

import produce from 'immer';
import * as React from 'react';
import ContextTest from './ContextTest';
import { Player } from './Models/Player';
import ThemeManager from './Models/ThemeManager';

export const StateContext = React.createContext(undefined);

export function getChangeNameButton(newName, state, setState) {
    const changeName = React.useCallback((id) => {
        setState(
            produce((draft: any) => {
                draft.player.name = newName;
            }),
        );
    }, []);

    return (
        <button
            onClick={() => {
                changeName(1);
            }}
        >
            Change Name to {newName}
        </button>
    );
}

let baseState = {
    themeManager: new ThemeManager(),
    debugMode: false,
    player: new Player(),
};

export default function App(): JSX.Element {
    const [refreshVar, setRefreshVar] = React.useState(0);
    const stateArr = React.useState(baseState);
    const [state, setState] = stateArr;

    return (
        <StateContext.Provider value={stateArr}>
            <div className={'app'} key={refreshVar}>
                <p>Hi</p>
                <p>{stateArr[0].player.name}</p>
                {getChangeNameButton('Wendy', state, setState)}
                <br />
                <ContextTest />
            </div>
        </StateContext.Provider>
    );
}
