"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe("Roman", function () {
    it("test value should be correct", function () {
        chai_1.expect(index_1.romanToArabic("IIV")).to.equal(5);
    });
});
