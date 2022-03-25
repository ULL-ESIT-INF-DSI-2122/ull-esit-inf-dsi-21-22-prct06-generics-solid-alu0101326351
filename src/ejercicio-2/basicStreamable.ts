import { Streamable } from "./streamable";
import { myType } from "./types";

export abstract class BasicStreamableCollection<T extends myType> implements Streamable<T> {

    constructor(public content: T[]) {}

    public push(newItem: T) {
        this.content.push(newItem);
    }

    public rankByCalification(): T[] {
        return this.content.sort(function (a, b) {
            return (b.calification - a.calification);
        });
    }

    public rankByYear(): T[] {
        return this.content.sort(function (a, b) {
            return (b.year - a.year);
        });    
    }

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