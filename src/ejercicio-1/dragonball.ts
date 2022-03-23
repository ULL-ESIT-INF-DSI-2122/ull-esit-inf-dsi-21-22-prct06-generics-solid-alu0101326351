import { Fighter } from "./fighter";

export class DragonBallCharacter extends Fighter {
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected specialAttack: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.specialAttack = specialAttack;
        }

    damage(attack: number, defense: number): number {
        if (this.specialAttack === "Kamehameha") {
            return (2.5 * attack) - defense;
        } else {
            return (2 * attack) - defense;
        }
    }
}
