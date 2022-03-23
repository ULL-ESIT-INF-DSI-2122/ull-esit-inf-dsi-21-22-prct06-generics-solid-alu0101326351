import 'mocha';
import { expect } from 'chai';
import { MarvelCharacter } from '../../ejercicio-1/marvel';

describe ("CLASS MARVEL", () => {
    let thanos: MarvelCharacter = new MarvelCharacter("Marvel", "Thanos", 2.20, 120, 44, 133, 77, 400, "soy inevitable", "Guante del infinito");
    
    it ("getUniverse() test", () => {
        expect(thanos.getUniverse()).to.equal("Marvel");
    });

    it ("getName() test", () => {
        expect(thanos.getName()).to.equal("Thanos");
    });

    it ("getHeight() test", () => {
        expect(thanos.getHeight()).to.equal(2.20);
    });

    it ("getWeight() test", () => {
        expect(thanos.getWeight()).to.equal(120);
    });

    it ("getSpeed() test", () => {
        expect(thanos.getSpeed()).to.equal(44);
    });

    it ("getAttack() test", () => {
        expect(thanos.getAttack()).to.equal(133);
    });

    it ("getDefense() test", () => {
        expect(thanos.getDefense()).to.equal(77);
    });

    it ("getHP() test", () => {
        expect(thanos.getHP()).to.equal(400);
    });

    it ("getType() test", () => {
        expect(thanos.getWeapon()).to.equal("Guante del infinito");
    });

    it ("catchingPhrase() test", () => {
        expect(thanos.catchingPhrase()).to.equal("I am Thanos ... soy inevitable")
    });

    it ("damage() test", () => {
        expect(thanos.damage(50)).to.equal(282.5);
    });
});