import { myType } from "./types";

/**
 * Interfaz que declara los métodos que deben tener las subclases. Recibe un tipo genérico que extiende
 * a myType formado por Serie, Film y Documental
 */
export interface Streamable<T extends myType> {
    push(newItem: T);
    rankByYear(): T[];
    rankByCalification(): T[];
    getNames(): string;
};