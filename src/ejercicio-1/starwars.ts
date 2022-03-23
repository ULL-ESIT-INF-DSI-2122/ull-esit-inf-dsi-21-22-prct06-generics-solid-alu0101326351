import { Fighter } from "./fighter";

export class StarWarsCharacter extends Fighter {
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected side: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.side = side;
        }

    damage(attack: number, defense: number): number {
        if (this.side === "light") {
            return (2.5 * attack) - defense;
        } else {
            return (2 * attack) - defense;
        }
    }
}