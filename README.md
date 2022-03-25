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

La clase combat tiene el constructor que recibe a los dos 3

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