import { Fighter } from "./fighter";

export class Pokemon extends Fighter {
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected type: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.type = type
        }

    damage(attack: number, defense: number): number {
        if (this.type === "water" || this.type === "fire") {
            return (2.5 * attack) - defense;
        } else {
            return (2.0 * attack) - defense;
        }
    }
}