export type myType = Film | Serie | Documental;

/**
 * Objeto que almacena información de una serie
 */
export type Serie = {
    name: string,
    year: number,
    seasons: number,
    calification: number,
    finish: boolean
};

/**
 * Objeto que almacena información de una película
 */
export type Film = {
    name: string,
    year: number,
    duration: number,
    calification: number,
    rentPrice: number,
    mainActor: string
};

/**
 * Objeto que almacena información de un documental
 */
export type Documental = {
    name: string,
    year: number,
    topic: string,
    calification: number
}