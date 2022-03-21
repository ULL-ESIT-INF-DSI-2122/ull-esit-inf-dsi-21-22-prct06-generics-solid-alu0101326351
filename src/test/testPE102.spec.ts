import 'mocha';
import { expect } from 'chai';
import { NumericPrintableCollection, StringPrintableCollection } from '../ejerciciosPE102/ejPE102'

describe("NUMERIC CLASS TEST", () => {
    let collectionTest = new NumericPrintableCollection([1, 2, 3]);

    it ("Print() test", () => {
        expect(collectionTest.print()).to.equal("1,2,3");
    });

    it ("addItem() test", () => {
        collectionTest.addItem(4);
        expect(collectionTest.print()).to.equal("1,2,3,4");
    });

    it ("getItem() test", () => {
        expect(collectionTest.getItem(1)).to.equal(2);
    });

    it ("removeItem() test", () => {
        collectionTest.removeItem(1)
        expect(collectionTest.print()).to.equal("2,3,4");
    });

    it ("getNumberOfItems() test", () => {
        expect(collectionTest.getNumberOfItems()).to.equal(3);
    });
});


describe("STRING CLASS TEST", () => {
    let collectionTest = new StringPrintableCollection(["A", "B", "C"]);

    it ("Print() test", () => {
        expect(collectionTest.print()).to.equal("A,B,C");
    });

    it ("addItem() test", () => {
        collectionTest.addItem("D");
        expect(collectionTest.print()).to.equal("A,B,C,D");
    });

    it ("getItem() test", () => {
        expect(collectionTest.getItem(1)).to.equal("B");
    });

    it ("removeItem() test", () => {
        collectionTest.removeItem(1)
        expect(collectionTest.print()).to.equal("B,C,D");
    });

    it ("getNumberOfItems() test", () => {
        expect(collectionTest.getNumberOfItems()).to.equal(3);
    });
});