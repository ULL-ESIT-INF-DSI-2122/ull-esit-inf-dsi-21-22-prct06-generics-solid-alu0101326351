import 'mocha';
import { expect } from 'chai';
import { Fighterex } from '../../ejercicio-1/fighterex';
import { Pokemon } from '../../ejercicio-1/pokemon';
import { DragonBallCharacter } from '../../ejercicio-1/dragonball';
import { MarvelCharacter } from '../../ejercicio-1/marvel';
import { StarWarsCharacter } from '../../ejercicio-1/starwars';


describe("FIGHTEREX TEST", () => {
    let charizard: Pokemon = new Pokemon("Pokemon", "Charizard", 1.70, 90, 36, 100, 56, 130, "ARRRRGGGGG", "fire");
    let goku: DragonBallCharacter = new DragonBallCharacter("Dragon Ball", "Goku", 1.50, 48, 140, 77, 77, 100, "yeka", "kamehameha");
    let thanos: MarvelCharacter = new MarvelCharacter("Marvel", "Thanos", 2.20, 120, 44, 133, 77, 400, "soy inevitable", "Guante del infinito");
    let darthVader: StarWarsCharacter = new StarWarsCharacter("Star Wars", "Darth Vader", 1.80, 80, 66, 120, 76, 120, "yo soy tu padre", "dark");

    let myFighterex: Fighterex = new Fighterex([charizard, thanos, goku, darthVader]);

    it ("presentation() test", () => {
        expect(myFighterex.presentation()).to.eq("I am Charizard ... ARRRRGGGGG,I am Thanos ... soy inevitable,I am Goku ... yeka,I am Darth Vader ... yo soy tu padre");
    });
});