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

    public catchingPhrase(): string {
        return "I am " + this.name + " ... " + this.phrase;
    }

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

    public getSpeed() {
        return this.speed;
    }

    public getHP(): number {
        return this.HP;
    }

    public getAttack(): number {
        return this.attack;
    }

    public getDefense(): number {
        return this.attack;
    }

    abstract damage(attack: number, defense: number): number;
}
