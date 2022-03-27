# Practica 6: Clases e interfaces genéricas y principios SOLID

## Ejercicio 1: El combate definitivo

Se crea una clase abstracta llamada Fighter, la cual tiene los atributos comunes a todos los combatientes y los getters para ellos definidos. Por último tiene un método damage() declarado como abstracto ya que dependiendo del universo al que pertenezca el combatiente el daño por ataque se calcula de manera distinta el daño de los ataques.

    export abstract class Fighter {
        constructor
        (
            protected readonly universe: string,
            protected readonly name: string,
            protected readonly height: number,
            protected readonly weight: number,
            protected readonly speed: number,
            protected readonly attack: number,
            protected readonly defense: number,
            protected readonly HP: number,
            protected readonly phrase: string
        )  {}

        public getUniverse(): string {
            return this.universe;
        }

        public getName(): string {
            return this.name;
        }

        public getHeight(): number {
            return this.height;
        }

        public getWeight(): number {
            return this.weight;
        }

        public getSpeed(): number {
            return this.speed;
        }

        public getAttack(): number {
            return this.attack;
        }

        public getDefense(): number {
            return this.defense;
        }

        public getHP(): number {
            return this.HP;
        }

        public catchingPhrase(): string {
            return "I am " + this.name + " ... " +this.phrase;
        }

        abstract damage(defense: number): number;
    }

Luego para cada universo se define una clase que implementa la clase abstracta Fighter. Cada una de estas clases tiene un atributo único de cada universo. El universo de Marvel almacena el arma del luchador, el de Pokemon el tipo, el de DragonBall el ataque especial y el universo StarWars el lado de la fuerza al que pertenece.

En el constructor se declara esta variable y se llama al constructor de Fighter con los parámetros necesarios. También se declara un getter para este atributo especial de cada universo. Por último cada universo tiene que definir su método damage(), para ello se utiliza el atributo especifico del universo. Por ejemplo en el universo Marvel si el arma del luchador es el guante del infinito el ataque se multiplica por 2,5 en vez del x2 del resto de armas.

    export class MarvelCharacter extends Fighter {
        constructor(universe: string, name: string, height: number, weight: number,
            speed: number, attack: number, defense: number, HP: number, phrase: string, protected weapon: string) {
                super(universe, name, height, weight, speed, attack, defense, HP, phrase);
                this.weapon = weapon;
            }

        damage(defense: number): number {
            if (this.weapon === "Guante del infinito") {
                return  (2.5 * this.attack) - defense;
            } else {
                return (2 * this.attack) - defense;
            }
        }

        public getWeapon(): string {
            return this.weapon
        }
    }

La clase Fighterex, tiene un array de Fighters el cual se pasa como parámetro. Tiene un método llamado presentacion() que retorna un string con la catching phrase de cada combatiente en la que dicen su nombre y su frase personal.

    export class Fighterex {
        constructor(private fighters: Fighter[]) {}

        public presentation() {
            let fighters: string[] = [];
            this.fighters.forEach((item: Fighter) => {
                fighters.push(item.catchingPhrase());
            });

            return fighters.toString();
        }
    }

La clase combat tiene el constructor que recibe a los dos luchadores y el método start() que inicia el combate. En cada turno se calcula el daño que causa el atacante y se suma a damageReceivedfighter2, luego se imprime por pantalla los datos del ataque y la vida restante de cada uno. Se calcula si la vida de el luchador 2 es igual o menor a 0. En caso afirmativo se acaba el combate imprimiendo al ganador por pantalla y terminando el bucle infinito, en caso negativo, se invierten los papeles y el luchador 2 ataca al 1. Esto se repite hasta que el daño recibido por alguno de los dos luchadores sea igual o mayor a su vida.

class Combat {
    /**
     * Constructor de la clase combat. Recibe dos fighters
     * @param fighter1 
     * @param fighter2 
     */
    constructor(private fighter1: Fighter, private fighter2: Fighter) {}

    /**
     * Inicia el combate y retorna el nombre del ganador
     * @returns 
     */
    public start(): string {
        let turn: number = 1;
        let damageReceivedfighter1: number = 0;
        let damageReceivedfighter2: number = 0;
        let damage: number = 0;

        while (1) {
            console.log("TURNO:", turn);
            console.log(this.fighter1.getName(), "ataca a", this.fighter2.getName()); 

            damage = this.fighter1.damage(this.fighter2.getDefense());
            damageReceivedfighter2 += damage;
            turn++;

            console.log("Daño infringido en el ataque: ", damage);
            console.log("\nVida restante de los combatintes");
            console.log(this.fighter1.getName(), ":", this.fighter1.getHP() - damageReceivedfighter1);
            console.log(this.fighter2.getName(), ":", this.fighter2.getHP() - damageReceivedfighter2, "\n\n");
            
            if (this.fighter2.getHP() - damageReceivedfighter2 <= 0) {
                console.log("===¡¡COMBATE ACABADO!!===");
                console.log(this.fighter2.getName(), "del universo", this.fighter2.getUniverse(), "ha perdido😕😕😕")
                console.log(this.fighter1.getName(), "del universo", this.fighter1.getUniverse(), "es el GANADOR😘😘😘");
                return this.fighter1.getName()
            }


            console.log("TURNO:", turn);
            console.log(this.fighter2.getName(), "ataca a", this.fighter1.getName()); 


            damage = this.fighter2.damage(this.fighter1.getDefense());
            damageReceivedfighter1 += damage;
            turn++;

            console.log("Daño infringido en el ataque: ", damage);
            console.log("\nVida restante de los combatientes");
            console.log(this.fighter1.getName(), ":", this.fighter1.getHP() - damageReceivedfighter1);
            console.log(this.fighter2.getName(), ":", this.fighter2.getHP() - damageReceivedfighter2, "\n\n");

            if (this.fighter1.getHP() - damageReceivedfighter1 <= 0) {
                console.log("===¡¡COMBATE ACABADO!!===");
                console.log(this.fighter1.getName(), "del universo", this.fighter1.getUniverse(),"ha perdido😕😕😕")
                console.log(this.fighter2.getName(), "del universo", this.fighter2.getUniverse(), "es el GANADOR😘😘😘");
                return this.fighter2.getName();
            }
        }
    }
}



## Ejercicio 2: DSI-FLIX

Primero creamos los tipos Film, Serie y Documental que contendrán la información de cada formato. Algunos atributos son comunes a todos ellos como el año o la clasificación y otro son exclusivos de cada uno como las temporadas en las series o el actor principal en las películas. También creamos el tipo myType como la unión de los 3 anteriores lo cual nos hará falta mas adelante al definir las interfaces y clases genéricas.

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


Creamos la interfaz genérica streamable que definirá los métodos básicos que toda plataforma de stream debe tener. Recibe un parámetro T que extiende al tipo que hemos creado antes llamado myType que hace que solo puedan recibirse Film, Serie o Documentals como parámetros.

    export interface Streamable<T extends myType> {
        push(newItem: T);
        rankByYear(): T[];
        rankByCalification(): T[];
        getNames(): string;
    };


Luego creamos la clase genérica basicStreamable que implementa la interfaz streamable. Aqui se implementan los métodos básicos de las plataformas online como son push() para añadir un nuevo item, rankByYear() o rankByCalification() que devuelven un array con el contenido ordenado por año o por calificación y por último getNames() que devuelve todos los nombres del contenido de la plataforma o undefined en caso de que no haya contenido aun .

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


Por último quedan implementar las clases que definen las plataformas de películas, series y documentales por separado. En la clase filmsPlataform(), el constructor llama al constructor de basicStreamable() pasandole como parámetro un array de películas. Luego se implementan dos métodos exclusivos de las plataformas de películas que son getPriceOf() al que se le pasa el título de una película y devuelve el precio de su alquiler o undefined en caso que esa película no exista en la plataforma. Por otro lado searchByActor() a la que le pasa el nombre de un actor y devuelve las películas de ese actor disponibles en la plataforma o undefined en caso de no haber ninguna.

    export class FilmsPlatform extends BasicStreamableCollection<Film> {

        constructor(films: Film[]) {
            super(films);
        }

        public getPriceOf(name: string): string | undefined {
            let price: string = "";
            this.content.forEach((item: Film) => {
                if (item.name == name) {
                    price += item.name + " -> " + item.rentPrice;
                }
            });

            if (price.length !== 0) {
                return price;
            } else {
                return undefined;
            }
        }

        public searchByActor(name: string): string | undefined {
            let result: string = "";
            this.content.forEach((item: Film) => {
                if (item.mainActor == name) {
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

Las clases seriesPlataform() y documentalPlataform() están implementada de la misma manera con sus métodos propios. La plataformas de series tienen un método llamado isFinished() al que se le pasa el nombre de una serie y retorna true si ya ha acabado o false si aun quedan capítulos por salir. Las plataformas de documentales tienen un método llamado getByTopic() al que se le pasa un tema y esta devuelve todos los documentales relacionados de la plataforma o undefined en caso de no haber ninguno


## Ejercicio 3: El cifrado indescifrable

Se han creado dos clases encoder y decoder para respetar el principio single-responsability por el que cada clase debe tener un solo propósito, en este caso una cifra los mensajes y la otra la descifra


    export class Encoder {

        constructor(private letters: string[]) {}

        public encode(message: string, key: string): string {
            let cifrado: string = '';
            for (let i: number = 0; i < message.length; i++) {
                const char: string = key[i % key.length];
                cifrado += this.letters[((this.letters.indexOf(message[i])) + (this.letters.indexOf(char) +1)) % this.letters.length];
            }
            return cifrado;
        }
    }

    export class Decoder {

        constructor(private letters: string[]) {}

        public decode(message: string, key: string): string {
            let result: string = '';
            for (let i: number = 0; i < message.length; i++) {
                const iKey: string = key[i % key.length];
                let index: number = ((this.letters.indexOf(message[i])) - (this.letters.indexOf(iKey) + 1));

                if (index < 0) {
                    index += this.letters.length;
                }

                result += this.letters[index];
            }
            return result;
        }
    }