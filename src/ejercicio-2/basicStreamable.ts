import { Streamable } from "./streamable";
import { myType } from "./types";

/**
 * Clase abstracta que define los métodos de streamable de la que heredaran las plataformas de contenido
 */
export abstract class BasicStreamableCollection<T extends myType> implements Streamable<T> {

    /**
     * Constructor que recibe un array de Film, Serie o Documental
     * @param content 
     */
    constructor(public content: T[]) {}

    /**
     * Añade nuevo contenido al final de array
     * @param newItem 
     */
    public push(newItem: T) {
        this.content.push(newItem);
    }

    /**
     * Devuelve un array con el contenido ordenado por calificación
     * @returns 
     */
    public rankByCalification(): T[] {
        return this.content.sort(function (a, b) {
            return (b.calification - a.calification);
        });
    }

    /**
     * Devuelve un array con el contenido ordenado por año
     * @returns 
     */
    public rankByYear(): T[] {
        return this.content.sort(function (a, b) {
            return (b.year - a.year);
        });    
    }

    /**
     * Dvuelve los nombres de los títulos
     * @returns 
     */
    public getNames(): string | undefined {
        let names: string = "";
        this.content.forEach((item: T) => {
            names += item.name + "\n";
        });

        if (names.length !== 0) {
            return names;
        } else {
            return undefined;
        }
    }
}