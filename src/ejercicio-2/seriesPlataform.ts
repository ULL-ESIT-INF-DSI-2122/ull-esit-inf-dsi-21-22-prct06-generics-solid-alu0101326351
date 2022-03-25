import { BasicStreamableCollection } from "./basicStreamable";
import { Serie } from "./types";

/**
 * Clase para representar una plataforma de series que extiende a BasicStreamableCollection
 */
export class SeriesPlatform extends BasicStreamableCollection<Serie> {
    /**
     * Constructor de la clase SeriesPlataform. Recibe un array de series
     * @param series 
     */
    constructor(series: Serie[]) {
        super(series);
    }

    /**
     * Función que recibe el nombre de ua serie y devuelve un booleano que represnta si esa serie
     * ya ha acabado o quedan mas temporadas por salir
     * @param name 
     * @returns 
     */
    public isFinished(name: string): boolean {
        let result: boolean
        this.content.forEach((item: Serie) => {
            if (item.name === name) {
                result = item.finish;
            }
        });
        return result;
    }
}