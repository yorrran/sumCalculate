import { expect } from "chai";
import { romanToArabic } from "../index";

describe("Roman", () => {
  it("test value should be correct", () => {
    expect(romanToArabic("IIV")).to.equal(5);
  });
});
