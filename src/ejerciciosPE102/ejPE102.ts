interface Collectabe<T> {
    addItem(newItem: T);
    getItem(n: number): T;
    removeItem(n: number);
    getNumberOfItems(n: number);
}


interface Printable {
    print();
}


abstract class PrintableCollection<T> implements Collectabe<T>, Printable {
    constructor(protected items: T[]) {}

    /**
     * Añade un nuevo item al final del array
     * @param newItem 
     */
    public addItem(newItem: T) {
        this.items.push(newItem);
    }

    /**
     * Devuelve el elemento en la posición n del array
     * @param n 
     * @returns 
     */
    public getItem(n: number): T {
        return this.items[n];  
    }

    /**
     * Elimina el item de la posición n del array
     * @param n 
     */
    public removeItem(n: number) {
        this.items.splice(0, n);
    }

    /**
     * Devuelve el número de items del array
     * @returns 
     */
    public getNumberOfItems() {
        return this.items.length;
    }

    abstract print(): string;
}



export class NumericPrintableCollection extends PrintableCollection<number> {

    /**
     * Constructor de la clase NumericPrintableCollection. Recibe un array con los números
     * @param items 
     */
    constructor(items: number[]) {
        super(items);
    }

    /**
     * Devuelve un string con los elementos dek array separados por comas
     * @returns 
     */
    public print(): string {
        return this.items.toString();
    }
}


export class StringPrintableCollection extends PrintableCollection<string> {
    /**
     * Constructor de la clase StringPrintableCollection. Recibe un aray con los strings
     * @param items 
     */
    constructor(items: string[]) {
        super(items);
    }

    /**
     * Devuelve un string con los strings del array separados por comas
     * @returns 
     */
    public print(): string {
        return this.items.join()
    }
}
