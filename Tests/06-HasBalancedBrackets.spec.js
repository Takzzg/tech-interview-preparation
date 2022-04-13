const { expect } = require("chai");
const HasBalanceBrackets = require("../Ejercicios/06-HasBalancedBrackets/HasBalancedBrackets");

describe("HasBalanceBrackets", function () {
  xit("should return true if called with {[]()}", function () {
    expect(HasBalanceBrackets("{[]()}")).to.equal(true);
  });
  xit("should return false if called with {[(])}", function () {
    expect(HasBalanceBrackets("{[(])}")).to.equal(false);
  });
  xit("should return false if called with {[(", function () {
    expect(HasBalanceBrackets("{[(")).to.equal(false);
  });
  xit("should return true if called with {[([{()[]{}}])]}", function () {
    expect(HasBalanceBrackets("{[([{()[]{}}])]}")).to.equal(true);
  });
});
