import 'mocha';
import { expect } from 'chai';
import { DocumentalsPlataform } from '../../ejercicio-2/documentalsPlataform';
import { Documental } from '../../ejercicio-2/types';

describe ("DOCUMENTALS TEST", () => {
    let cosmos: Documental = {
        name: "Cosmos",
        year: 1995,
        calification: 8.4,
        topic: "Universo"
    };

    let eraseUnaVez: Documental = {
        name: "Erase una vez",
        year: 1988,
        calification: 9,
        topic: "Cuerpo Humano"
    };

    let DSI_Prime: DocumentalsPlataform = new DocumentalsPlataform([cosmos]);

    it("push() test", () => {
        DSI_Prime.push(eraseUnaVez);
        expect(DSI_Prime.content).to.eqls([cosmos, eraseUnaVez])
    });

    it("rankByYear() test", () => {
        expect(DSI_Prime.rankByYear()).to.eqls([cosmos, eraseUnaVez])
    });

    it("rankByCalification() test", () => {
        expect(DSI_Prime.rankByCalification()).to.eqls([eraseUnaVez, cosmos])
    });

    it("getNames() test", () => {
        expect(DSI_Prime.getNames()).to.equal("Erase una vez\nCosmos\n")
    });

    it("getByTopic() test", () => {
        expect(DSI_Prime.getByTopic("Universo")).to.equal("Cosmos\n");
        expect(DSI_Prime.getByTopic("Cuerpo Humano")).to.equal("Erase una vez\n");
        expect(DSI_Prime.getByTopic("FOO")).to.equal(undefined);

    });
});