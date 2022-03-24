import { Fighter } from "./fighter";

/**
 * Clase que representa un personaje de StarWars
 */
export class StarWarsCharacter extends Fighter {
    /**
     * Constructor de la clase StarWarsFighter
     * @param universe 
     * @param name 
     * @param height 
     * @param weight 
     * @param speed 
     * @param attack 
     * @param defense 
     * @param HP 
     * @param phrase 
     * @param side 
     */
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected side: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.side = side;
        }

    /**
     * Método que calcula el daño de un ataque de un luchador de Star Wars. Si pertenece al lado de la luz, su ataque
     * se multiplica por 2.5. en cualuier otro caso por 2
     * @param defense 
     * @returns 
     */
    damage(defense: number): number {
        if (this.side === "light") {
            return (2.5 * this.attack) - defense;
        } else {
            return (2 * this.attack) - defense;
        }
    }

    /**
     * Devuelve el lado de la fuerza al que pertenece el luchador
     * @returns 
     */
    public getSide(): string {
        return this.side;
    }
}