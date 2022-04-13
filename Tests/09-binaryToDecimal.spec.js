const { expect } = require("chai");
const BinaryToDecimal = require("../Ejercicios/09-BinaryToDecimal/BinaryToDecimal");

describe("BinaryToDecimal", function () {
  xit("should return 2 when called with '10'", function () {
    expect(BinaryToDecimal("10")).to.equal(2);
  });
  xit("should return 7 when called with '111'", function () {
    expect(BinaryToDecimal("111")).to.equal(7);
  });
});
