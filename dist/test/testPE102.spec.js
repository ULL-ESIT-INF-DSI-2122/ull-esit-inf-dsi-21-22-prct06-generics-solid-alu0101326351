"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const ejPE102_1 = require("../ejerciciosPE102/ejPE102");
describe("NUMERIC CLASS TEST", () => {
    let collectionTest = new ejPE102_1.NumericPrintableCollection([1, 2, 3]);
    it("Print() test", () => {
        (0, chai_1.expect)(collectionTest.print()).to.equal("1,2,3");
    });
    it("addItem() test", () => {
        collectionTest.addItem(4);
        (0, chai_1.expect)(collectionTest.print()).to.equal("1,2,3,4");
    });
    it("getItem() test", () => {
        (0, chai_1.expect)(collectionTest.getItem(1)).to.equal(2);
    });
    it("removeItem() test", () => {
        collectionTest.removeItem(1);
        (0, chai_1.expect)(collectionTest.print()).to.equal("2,3,4");
    });
    it("getNumberOfItems() test", () => {
        (0, chai_1.expect)(collectionTest.getNumberOfItems()).to.equal(3);
    });
});
describe("STRING CLASS TEST", () => {
    let collectionTest = new ejPE102_1.StringPrintableCollection(["A", "B", "C"]);
    it("Print() test", () => {
        (0, chai_1.expect)(collectionTest.print()).to.equal("A,B,C");
    });
    it("addItem() test", () => {
        collectionTest.addItem("D");
        (0, chai_1.expect)(collectionTest.print()).to.equal("A,B,C,D");
    });
    it("getItem() test", () => {
        (0, chai_1.expect)(collectionTest.getItem(1)).to.equal("B");
    });
    it("removeItem() test", () => {
        collectionTest.removeItem(1);
        (0, chai_1.expect)(collectionTest.print()).to.equal("B,C,D");
    });
    it("getNumberOfItems() test", () => {
        (0, chai_1.expect)(collectionTest.getNumberOfItems()).to.equal(3);
    });
});
