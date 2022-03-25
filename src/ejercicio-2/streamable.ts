import { myType } from "./types";

export interface Streamable<T extends myType> {
    push(newItem: T);
    rankByYear(): T[];
    rankByCalification(): T[];
    getNames(): string;
};