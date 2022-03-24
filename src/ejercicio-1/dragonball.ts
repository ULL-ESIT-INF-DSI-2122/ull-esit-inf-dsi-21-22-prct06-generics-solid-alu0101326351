import { Fighter } from "./fighter";

/**
 * Clase que define un luchador del universo Dragon Ball
 */
export class DragonBallCharacter extends Fighter {
    /**
     * Constructor de la clase DragonBallCharacter
     * @param universe 
     * @param name 
     * @param height 
     * @param weight 
     * @param speed 
     * @param attack 
     * @param defense 
     * @param HP 
     * @param phrase 
     * @param specialAttack 
     */
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected specialAttack: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.specialAttack = specialAttack;
        }

    /**
     * Método que calcula el daño de un ataque de un luchador de Dragon Ball. Si ataque especial es kamehameha su ataque
     * se multiplica por 2.5. en cualuier otro caso por 2
     * @param defense 
     * @returns 
     */
    damage(defense: number): number {
        if (this.specialAttack === "kamehameha") {
            return (2.5 * this.attack) - defense;
        } else {
            return (2 * this.attack) - defense;
        }
    }

    /**
     * Devuelve el ataque especial de un luchador Dragon Ball
     * @returns 
     */
    public getSpecialAttack(): string {
        return this.specialAttack;
    }
}
