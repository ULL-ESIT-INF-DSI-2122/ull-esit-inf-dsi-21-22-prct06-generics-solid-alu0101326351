import { BasicStreamableCollection } from "./basicStreamable";
import { Documental } from "./types";

/**
 * Clase para representar una plataforma de documentales
 */
export class DocumentalsPlataform extends BasicStreamableCollection<Documental> {
    /**
     * Constructor que recibe un array de documentales
     * @param docs 
     */
    constructor(docs: Documental[]) {
        super(docs);
    }

    /**
     * Metodo que recibe un tema y devuelve todos los documentales de dicho tema o undefined en caso de no existir 
     * ninguno
     * @param name 
     * @returns 
     */
    public getByTopic(name: string): string | undefined {
        let result: string = "";
        this.content.forEach((item: Documental) => {
            if (item.topic == name) {
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