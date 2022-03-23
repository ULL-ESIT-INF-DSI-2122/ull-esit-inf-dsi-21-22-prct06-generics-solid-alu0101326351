import { Fighter } from './fighter'

class Fighterex {
    constructor(private fighters: Fighter[]) {}

    public showFighters() {
        let fighters: string[] = [];
        this.fighters.forEach((item: Fighter) => {
            fighters.push(item.catchingPhrase());
        });

        return fighters;
    }
}
