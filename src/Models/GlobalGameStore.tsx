/**
 * The Global Game Store is our one store for holding game information in accordance with the Zustand library's specifications.
 */

import { Player } from '../Models/Fighter/Player';
import ThemeManager from '../Models/Singles/ThemeManager';

export const iconSizeStr = '18px';

export interface IRootStore {
    themeManager: ThemeManager;
    debugMode: boolean;
    player: Player;
}
