import { Fighter } from "./fighter";


export class MarvelCharacter extends Fighter {
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected weapon: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.weapon = weapon;
        }

    damage(attack: number, defense: number): number {
        if (this.weapon > "Guante del infinito") {
            return  (2.5 * attack) - defense;
        } else {
            return (2 * attack) - defense;
        }
    }
}
