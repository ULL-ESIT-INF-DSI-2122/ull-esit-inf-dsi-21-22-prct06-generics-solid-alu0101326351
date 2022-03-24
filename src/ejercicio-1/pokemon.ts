import { Fighter } from "./fighter";

/**
 * Clase que define un luchador de la clase Pokemon
 */
export class Pokemon extends Fighter {
    /**
     * Constructor de la clase Pokemon
     * @param universe 
     * @param name 
     * @param height 
     * @param weight 
     * @param speed 
     * @param attack 
     * @param defense 
     * @param HP 
     * @param phrase 
     * @param type 
     */
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected type: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.type = type
        }

    /**
     * Método que calcula el daño de un ataque de un luchador de pokemon. Si son de tipo agua o fuego su ataque
     * se multiplica por 2.5. en cualuier otro caso por 2
     * @param defense 
     * @returns 
     */
    damage(defense: number): number {
        if (this.type === "water" || this.type === "fire") {
            return (2.5 * this.attack) - defense;
        } else {
            return (2.0 * this.attack) - defense;
        }
    }

    /**
     * Retorna el tipo del pokemon
     * @returns 
     */
    public getType(): string {
        return this.type;
    }
}