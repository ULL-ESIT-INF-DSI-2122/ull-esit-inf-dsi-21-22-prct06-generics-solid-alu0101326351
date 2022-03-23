import 'mocha';
import { expect } from 'chai';
import { Pokemon } from '../../ejercicio-1/pokemon';

describe ("CLASS POKEMON", () => {
    let charizard: Pokemon = new Pokemon("Pokemon", "Charizard", 1.70, 90, 36, 100, 56, 130, "ARRRRGGGGG", "fire");
    
    it ("getUniverse() test" , () => {
        expect(charizard.getUniverse()).to.equal("Pokemon");
    });

    it ("getName() test", () => {
        expect(charizard.getName()).to.equal("Charizard");
    });

    it ("getHeight() test", () => {
        expect(charizard.getHeight()).to.equal(1.70);
    });

    it ("getWeight() test", () => {
        expect(charizard.getWeight()).to.equal(90);
    });

    it ("getSpeed() test", () => {
        expect(charizard.getSpeed()).to.equal(36);
    });

    it ("getAttack() test", () => {
        expect(charizard.getAttack()).to.equal(100);
    });

    it ("getDefense() test", () => {
        expect(charizard.getDefense()).to.equal(56);
    });

    it ("getHP() test", () => {
        expect(charizard.getHP()).to.equal(130);
    });

    it ("getType() test", () => {
        expect(charizard.getType()).to.equal("fire");
    });

    it ("catchingPhrase() test", () => {
        expect(charizard.catchingPhrase()).to.equal("I am Charizard ... ARRRRGGGGG")
    });

    it ("damage() test", () => {
        expect(charizard.damage(50)).to.equal(200);
    });
});