import { Fighter  } from './fighter'

/**
 * Clase que almacena un conjunto de luchadores
 */
export class Fighterex {
    /**
     * Constructor de la clase Fighterex. Recibe el array con los Fighters
     * @param fighters 
     */
    constructor(private fighters: Fighter[]) {}

    /**
     * Devuelve un string con la presentación de cada luchador
     * @returns 
     */
    public presentation() {
        let fighters: string[] = [];
        this.fighters.forEach((item: Fighter) => {
            fighters.push(item.catchingPhrase());
        });

        return fighters.toString();
    }
}
