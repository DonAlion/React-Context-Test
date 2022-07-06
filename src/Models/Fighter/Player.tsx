/**
 * Represents the main character being played by the real-life player interacting with the game.
 */
import { immerable } from 'immer';
import { __GLOBAL_REFRESH_FUNC_REF } from '../../App';
import Fighter from './Fighter';
import EPlayerActivity from './EPlayerActivity';

export class Player extends Fighter {
    [immerable] = true;
    activity: EPlayerActivity = EPlayerActivity.IDLE;
    knowsErin: boolean = false;

    constructor() {
        super();
        this.generatePlayer();
    }

    generatePlayer = () => {
        this.name = 'Joe';
        this.level = 1;
        this.experience = 0;
        this.gold = 0;
    };

    /**
     * Weight management functions.
     */

    weightMax: number = 120;

    /**
     * Processes gold transaction for using the inn, of subtracting 'inn_cost' gold.
     * @returns
     */
    useInn: () => boolean = () => {
        let inn_cost = 2;

        if (this.gold >= inn_cost) {
            this.gold -= inn_cost;
            return true;
        }

        return false;
    };
}
