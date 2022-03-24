import { Fighter } from "./fighter";

/**
 * Clase que define un luchador del universo Marvel
 */
export class MarvelCharacter extends Fighter {
    /**
     * Constructor de la clase MarvelCharacter
     * @param universe 
     * @param name 
     * @param height 
     * @param weight 
     * @param speed 
     * @param attack 
     * @param defense 
     * @param HP 
     * @param phrase 
     * @param weapon 
     */
    constructor(universe: string, name: string, height: number, weight: number,
        speed: number, attack: number, defense: number, HP: number, phrase: string, protected weapon: string) {
            super(universe, name, height, weight, speed, attack, defense, HP, phrase);
            this.weapon = weapon;
        }

    /**
     * Método que calcula el daño de un ataque de un luchador de marvel. Si su arma es el guante del infinito su ataque
     * se multiplica por 2.5. en cualuier otro caso por 2
     * @param defense 
     * @returns 
     */
    damage(defense: number): number {
        if (this.weapon === "Guante del infinito") {
            return  (2.5 * this.attack) - defense;
        } else {
            return (2 * this.attack) - defense;
        }
    }

    /**
     * Devuelve el arma del luchador
     * @returns 
     */
    public getWeapon(): string {
        return this.weapon
    }
}
