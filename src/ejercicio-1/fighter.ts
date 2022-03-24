/**
 * Clase abstracta Fighter
 */
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

    /**
     * Devuelve el universo del luchador
     * @returns 
     */
    public getUniverse(): string {
        return this.universe;
    }

    /**
     * Devuelve el nombre del luchador
     * @returns 
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Devuelve la altura del luchador
     * @returns 
     */
    public getHeight(): number {
        return this.height;
    }

    /**
     * Devuelve el peso del luchador
     * @returns 
     */
    public getWeight(): number {
        return this.weight;
    }

    /**
     * Devuelve la velocidad del luchador
     * @returns 
     */
    public getSpeed(): number {
        return this.speed;
    }

    /**
     * Devuelve el ataque del luchador
     * @returns 
     */
    public getAttack(): number {
        return this.attack;
    }

    /**
     * Devuelve la defensa del luchador
     * @returns 
     */
    public getDefense(): number {
        return this.defense;
    }

    /**
     * Devuelve los puntos de vida del luchador
     * @returns 
     */
    public getHP(): number {
        return this.HP;
    }

    /**
     * El luchador dice su nombre y su frase personal
     * @returns 
     */
    public catchingPhrase(): string {
        return "I am " + this.name + " ... " +this.phrase;
    }

    /**
     * Método abstracto que recibe la defensa del otro luchador y devuelve el daño que un ataque
     * le hace. En cada universo se calcula diferente este daño
     * @param defense 
     */
    abstract damage(defense: number): number;
}

