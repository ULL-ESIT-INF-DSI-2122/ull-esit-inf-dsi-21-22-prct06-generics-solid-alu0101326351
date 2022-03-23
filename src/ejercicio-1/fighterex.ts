import { Fighter  } from './fighter'

export class Fighterex {
    constructor(private fighters: Fighter[]) {}

    public presentation() {
        let fighters: string[] = [];
        this.fighters.forEach((item: Fighter) => {
            fighters.push(item.catchingPhrase());
        });

        return fighters.toString();
    }
}
