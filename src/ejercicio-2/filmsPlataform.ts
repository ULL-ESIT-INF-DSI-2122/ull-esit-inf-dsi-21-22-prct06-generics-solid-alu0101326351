import { Film } from "./types";
import { BasicStreamableCollection } from "./basicStreamable";

/**
 * Clase para representar una plataforma de películas
 */
export class FilmsPlatform extends BasicStreamableCollection<Film> {
    /**
     * Constructor que recibe un array de películas
     * @param films 
     */
    constructor(films: Film[]) {
        super(films);
    }

    /**
     * Método que recibe el nombre de una película y devuelve el precio de su alquiler o undefined
     * en caso que no exista
     * @param name 
     * @returns 
     */
    public getPriceOf(name: string): string | undefined {
        let price: string = "";
        this.content.forEach((item: Film) => {
            if (item.name == name) {
                price += item.name + " -> " + item.rentPrice;
            }
        });

        if (price.length !== 0) {
            return price;
        } else {
            return undefined;
        }
    }

    /**
     * Metodo que recibe el nombre de un actor y devuelve las películas que tenga en la plataforma o undefined en
     * caso que no exista ninguna
     * @param name 
     * @returns 
     */
    public searchByActor(name: string): string | undefined {
        let result: string = "";
        this.content.forEach((item: Film) => {
            if (item.mainActor == name) {
                result += item.name + "\n";
            }
        });

        if (result.length !== 0) {
            return result;
        } else {
            return undefined;
        }
    }
}