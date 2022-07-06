import { immerable } from 'immer';

export default class Fighter {
    [immerable] = true;
    name: string = '';
    level: number = 0;
    experience: number = 0;
    gold: number = 0;

    reset() {
        this.name = '';
        this.level = 0;
        this.experience = 0;
        this.gold = 0;
    }
}
