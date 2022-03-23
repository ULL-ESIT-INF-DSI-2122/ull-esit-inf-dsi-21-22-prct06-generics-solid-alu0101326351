import 'mocha';
import { expect } from 'chai';
import { StarWarsCharacter } from '../../ejercicio-1/starwars';

describe ("CLASS STAR WARS", () => {
    let darthVader: StarWarsCharacter = new StarWarsCharacter("Star Wars", "Darth Vader", 1.80, 80, 66, 120, 76, 120, "yo soy tu padre", "dark");
    
    it ("getUniverse() test" , () => {
        expect(darthVader.getUniverse()).to.equal("Star Wars");
    });

    it ("getName() test", () => {
        expect(darthVader.getName()).to.equal("Darth Vader");
    });

    it ("getHeight() test", () => {
        expect(darthVader.getHeight()).to.equal(1.80);
    });

    it ("getWeight() test", () => {
        expect(darthVader.getWeight()).to.equal(80);
    });

    it ("getSpeed() test", () => {
        expect(darthVader.getSpeed()).to.equal(66);
    });

    it ("getAttack() test", () => {
        expect(darthVader.getAttack()).to.equal(120);
    });

    it ("getDefense() test", () => {
        expect(darthVader.getDefense()).to.equal(76);
    });

    it ("getHP() test", () => {
        expect(darthVader.getHP()).to.equal(120);
    });

    it ("getType() test", () => {
        expect(darthVader.getSide()).to.equal("dark");
    });

    it ("catchingPhrase() test", () => {
        expect(darthVader.catchingPhrase()).to.equal("I am Darth Vader ... yo soy tu padre")
    });

    it ("damage() test", () => {
        expect(darthVader.damage(50)).to.equal(190);
    });
});