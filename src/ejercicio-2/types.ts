export type myType = Film | Serie | Documental;

export type Serie = {
    name: string,
    year: number,
    seasons: number,
    calification: number,
    finish: boolean
};

export type Film = {
    name: string,
    year: number,
    duration: number,
    calification: number,
    rentPrice: number,
    mainActor: string
};

export type Documental = {
    name: string,
    year: number,
    topic: string,
    calification: number
}