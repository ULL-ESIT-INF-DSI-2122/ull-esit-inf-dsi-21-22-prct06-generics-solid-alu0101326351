type Serie = {
    name: string,
    year: number,
    caps: number,
    calification: number
};

type Film = {
    name: string,
    year: number,
    duration: number,
    calification: number
};

type Documental = {
    name: string,
    year: number,
    topic: string,
    calification: number
}

interface Streamable<T> {
    push(newItem: T);
    rankByYear(): T[];
    rankByCalification(): T[];
    delete(name: string);
};

abstract class BasicStreamableCollection<T> implements Streamable<T> {

    constructor(protected content: T[]) {}

    public push(newItem: T) {
        this.content.push(newItem);
    }

    public rankByCalification(): T[] {
        return this.content.sort(function (a, b) {
            return (b.calification - a.calification);
        });
    }

    public sortByYear(): T[] {
        return this.content.sort(function (a, b) {
            return (b.year - a.year);
        });    
    }

    public delete(name: string) {
        let index: number = this.content.indexOf(name);
        if(index != -1) {
            // Eliminamos ese elemento.
            this.content.splice(index, 1);
        }
        return this.content;
    }
}


class FilmsPlatform extends BasicStreamableCollection<Film> {
    constructor(films: Film[]) {
        super(films);
    }

    public rankByCalification(): Film[] {
        return this.content.sort(function (a, b) {
            return (b.calification - a.calification)
        })
    }
}
let bellezaOculta: Film = {
    name: "Belleza Oculta",
    year: 2001,
    duration: 120,
    calification: 9
}

let PiratasDelCaribe: Film = {
    name: "Piratas del caribe",
    year: 2004,
    duration: 120,
    calification: 9.5
}

let netflix: FilmsPlatform = new FilmsPlatform([bellezaOculta, PiratasDelCaribe]);
console.log(netflix.rankByCalification())


class SeriesPlatform extends BasicStreamableCollection<Serie> {
    constructor(series: Serie[]) {
        super(series);
    }
}


class DocumentalsPlataform extends BasicStreamableCollection<Documental> {
    constructor(docs: Documental[]) {
        super(docs);
    }
}