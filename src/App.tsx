/**
 * The main component handles the highest-level routing of pages based on user interaction.
 * See EPages.tsx for page options and PageSlice.tsx for page store management.
 */

import produce from 'immer';
import * as React from 'react';
import ContextTest from './ContextTest';
import { Player } from './Models/Fighter/Player';
import ThemeManager from './Models/Singles/ThemeManager';

export let __GLOBAL_REFRESH_FUNC_REF: Function;

/**
 *
    // Set our global refresh function used to refresh pages on store changes.
    __GLOBAL_REFRESH_FUNC_REF = () => {
        // Increment 'refresh var' to force refresh.
        setRefreshVar((v: number) => v + 1);
    };

    // Since we can't declare the refresh func as const, freeze it now to prevent unintended modification.
    Object.freeze(__GLOBAL_REFRESH_FUNC_REF);

 */

export const StateContext = React.createContext(undefined);
export const StateDispatchContext = React.createContext(undefined);

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

export default function App(): JSX.Element {
    const [refreshVar, setRefreshVar] = React.useState(0);

    let c = {
        themeManager: new ThemeManager(),
        debugMode: false,
        player: new Player(),
    };

    const [state, setState] = React.useState(c);

    return (
        <StateContext.Provider value={state}>
            <StateDispatchContext.Provider value={setState}>
                <div className={'app'} key={refreshVar}>
                    <p>Hi</p>
                    <p>{state.player.name}</p>
                    {getChangeNameButton('Wendy', state, setState)}
                    <br />
                    <ContextTest />
                </div>
            </StateDispatchContext.Provider>
        </StateContext.Provider>
    );
}
