import 'mocha';
import { expect } from 'chai';
import { FilmsPlatform } from '../../ejercicio-2/filmsPlataform';
import { Film } from '../../ejercicio-2/types';

describe ("FILMS PLATAFORM TEST", () => {
    let piratasDelCaribe: Film = {
        name: "Piratas del Caribe",
        year: 2006,
        duration: 125,
        calification: 10,
        rentPrice: 4.99,
        mainActor: "Jonny Deep"
    };

    let menInBlack: Film = {
        name: "Men In Black",
        year: 2003,
        duration: 114,
        calification: 8.5,
        rentPrice: 2.99,
        mainActor: "Will Smith"
    };

    let bellezaOculta: Film = {
        name: "Belleza Oculta",
        year: 2004,
        duration: 99,
        calification: 7.5,
        rentPrice: 0.99,
        mainActor: "Will Smith"
    };

    let DSI_Prime: FilmsPlatform = new FilmsPlatform([piratasDelCaribe, menInBlack]);

    it("push() test", () => {
        DSI_Prime.push(bellezaOculta);
        expect(DSI_Prime.content).to.eqls([piratasDelCaribe, menInBlack, bellezaOculta])
    });

    it("rankByYear() test", () => {
        expect(DSI_Prime.rankByYear()).to.eqls([piratasDelCaribe, bellezaOculta, menInBlack])
    });

    it("rankByCalification() test", () => {
        expect(DSI_Prime.rankByCalification()).to.eqls([piratasDelCaribe, menInBlack, bellezaOculta])
    });

    it("getNames() test", () => {
        expect(DSI_Prime.getNames()).to.equal("Piratas del Caribe\nMen In Black\nBelleza Oculta\n")
    });

    it("getPriceOf() test", () => {
        expect(DSI_Prime.getPriceOf("Piratas del Caribe")).to.equal("Piratas del Caribe -> 4.99");
        expect(DSI_Prime.getPriceOf("Belleza Oculta")).to.equal("Belleza Oculta -> 0.99")
        expect(DSI_Prime.getPriceOf("Men In Black")).to.equal("Men In Black -> 2.99")
    });

    it("searchByActor() test", () => {
        expect(DSI_Prime.searchByActor("Jonny Deep")).to.equal("Piratas del Caribe\n");
        expect(DSI_Prime.searchByActor("Will Smith")).to.equal("Men In Black\nBelleza Oculta\n")
    });
});