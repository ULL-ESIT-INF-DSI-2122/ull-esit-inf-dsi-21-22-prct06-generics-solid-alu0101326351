import { Fighter } from "./fighter";

export class Pokemon extends Fighter {
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected type: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.type = type
        }

    damage(defense: number): number {
        if (this.type === "water" || this.type === "fire") {
            return (2.5 * this.attack) - defense;
        } else {
            return (2.0 * this.attack) - defense;
        }
    }

    public getType(): string {
        return this.type;
    }
}