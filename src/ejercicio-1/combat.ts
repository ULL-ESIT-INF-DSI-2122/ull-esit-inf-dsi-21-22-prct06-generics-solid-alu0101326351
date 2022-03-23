import { Fighter } from "./fighter";

class Combat {
    constructor(private fighter1: Fighter, private fighter2: Fighter) {}

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
