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
