import 'mocha';
import { expect } from 'chai';
import { SeriesPlatform } from '../../ejercicio-2/seriesPlataform';
import { Serie } from '../../ejercicio-2/types';

describe ("SERIES PLATAFORM TEST", () => {
    let prisonBreak: Serie = {
        name: "Prison Break",
        year: 2008,
        calification: 10,
        seasons: 5,
        finish: true
    };

    let peakyBlinders: Serie = {
        name: "Peaky Blinders",
        year: 2017,
        calification: 9,
        seasons: 5,
        finish: false
    };

    let ozark: Serie = {
        name: "Ozark",
        year: 2019,
        calification: 8.6,
        seasons: 4,
        finish: false
    };

    let DSI_Prime: SeriesPlatform = new SeriesPlatform([prisonBreak, peakyBlinders]);

    it("push() test", () => {
        DSI_Prime.push(ozark);
        expect(DSI_Prime.content).to.eqls([prisonBreak, peakyBlinders, ozark])
    });

    it("rankByYear() test", () => {
        expect(DSI_Prime.rankByYear()).to.eqls([ozark, peakyBlinders, prisonBreak])
    });

    it("rankByCalification() test", () => {
        expect(DSI_Prime.rankByCalification()).to.eqls([prisonBreak, peakyBlinders, ozark])
    });

    it("getNames() test", () => {
        expect(DSI_Prime.getNames()).to.equal("Prison Break\nPeaky Blinders\nOzark\n")
    });

    it("isFinished() test", () => {
        expect(DSI_Prime.isFinished("Prison Break")).to.equal(true);
        expect(DSI_Prime.isFinished("Peaky Blinders")).to.equal(false);
        expect(DSI_Prime.isFinished("Ozark")).to.equal(false);
    });
});