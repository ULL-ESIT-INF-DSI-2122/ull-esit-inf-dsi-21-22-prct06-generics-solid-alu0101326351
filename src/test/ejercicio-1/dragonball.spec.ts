import 'mocha';
import { expect } from 'chai';
import { DragonBallCharacter } from '../../ejercicio-1/dragonball';

describe ("CLASS DRAGON BALL", () => {
    let goku: DragonBallCharacter = new DragonBallCharacter("Dragon Ball", "Goku", 1.50, 48, 140, 77, 77, 100, "yeka", "kamehameha");
    
    it ("getUniverse() test", () => {
        expect(goku.getUniverse()).to.equal("Dragon Ball");
    });

    it ("getName() test", () => {
        expect(goku.getName()).to.equal("Goku");
    });

    it ("getHeight() test", () => {
        expect(goku.getHeight()).to.equal(1.50);
    });

    it ("getWeight() test", () => {
        expect(goku.getWeight()).to.equal(48);
    });

    it ("getSpeed() test", () => {
        expect(goku.getSpeed()).to.equal(140);
    });

    it ("getAttack() test", () => {
        expect(goku.getAttack()).to.equal(77);
    });

    it ("getDefense() test", () => {
        expect(goku.getDefense()).to.equal(77);
    });

    it ("getHP() test", () => {
        expect(goku.getHP()).to.equal(100);
    });

    it ("getType() test", () => {
        expect(goku.getSpecialAttack()).to.equal("kamehameha");
    });

    it ("catchingPhrase() test", () => {
        expect(goku.catchingPhrase()).to.equal("I am Goku ... yeka")
    });

    it ("damage() test", () => {
        expect(goku.damage(50)).to.equal(142.5);
    });
});