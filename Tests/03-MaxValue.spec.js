const { expect } = require("chai");
const MaxValue = require("../Ejercicios/03-MaxValue/MaxValue");

describe("MaxValue", function () {
  xit("should return 9 if the array of shares is [4,3,2,5,11]", function () {
    expect(MaxValue([4,3,2,5,11])).to.equal(9);
  });
  xit("should return 9 if the array of shares is [23,7,3,4,8,6]", function () {
    expect(MaxValue([23,7,3,4,8,6])).to.equal(5);
  });
});
