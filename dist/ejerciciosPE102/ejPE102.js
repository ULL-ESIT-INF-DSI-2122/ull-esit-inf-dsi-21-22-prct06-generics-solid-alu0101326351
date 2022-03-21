"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringPrintableCollection = exports.NumericPrintableCollection = void 0;
class PrintableCollection {
    constructor(items) {
        this.items = items;
    }
    /**
     * Añade un nuevo item al final del array
     * @param newItem
     */
    addItem(newItem) {
        this.items.push(newItem);
    }
    /**
     * Devuelve el elemento en la posición n del array
     * @param n
     * @returns
     */
    getItem(n) {
        return this.items[n];
    }
    /**
     * Elimina el item de la posición n del array
     * @param n
     */
    removeItem(n) {
        this.items.splice(0, n);
    }
    /**
     * Devuelve el número de items del array
     * @returns
     */
    getNumberOfItems() {
        return this.items.length;
    }
}
class NumericPrintableCollection extends PrintableCollection {
    /**
     * Constructor de la clase NumericPrintableCollection. Recibe un array con los números
     * @param items
     */
    constructor(items) {
        super(items);
    }
    /**
     * Devuelve un string con los elementos dek array separados por comas
     * @returns
     */
    print() {
        return this.items.toString();
    }
}
exports.NumericPrintableCollection = NumericPrintableCollection;
class StringPrintableCollection extends PrintableCollection {
    /**
     * Constructor de la clase StringPrintableCollection. Recibe un aray con los strings
     * @param items
     */
    constructor(items) {
        super(items);
    }
    /**
     * Devuelve un string con los strings del array separados por comas
     * @returns
     */
    print() {
        return this.items.join();
    }
}
exports.StringPrintableCollection = StringPrintableCollection;
