const { expect } = require('chai')
const spy = require('../Ejercicios/15-SpyOn/SpyOn')

describe('SpyOn', function () {
  const adder = (n1, n2) => {
    return n1 + n2
  }
  let adderSpy
  beforeEach(() => {
    adderSpy = spy(adder)
  })
  xit('get callCount should return the number of times executed', function () {
    expect(adderSpy.getCallCount()).to.equal(0)
    adderSpy(2, 3)
    expect(adderSpy.getCallCount()).to.equal(1)
    adderSpy(4, 5)
    adderSpy(5, 6)
    expect(adderSpy.getCallCount()).to.equal(3)
  })
  xit('wasCalledWith should return true if spy function was once called with that argument', function () {
    adderSpy(2, 3)
    expect(adderSpy.wasCalledWith(2)).to.equal(true)
    expect(adderSpy.wasCalledWith(3)).to.equal(true)
  })
  xit('wasCalledWith should return false if spy function was never called with that argument', function () {
    adderSpy(2, 3)
    expect(adderSpy.wasCalledWith(4)).to.equal(false)
    expect(adderSpy.wasCalledWith(5)).to.equal(false)
  })
  xit('returned should return true if spy function once returned that value', function () {
    adderSpy(2, 3)
    adderSpy(2, 4)
    expect(adderSpy.returned(5)).to.equal(true)
    expect(adderSpy.returned(6)).to.equal(true)
  })
  xit('returned should return false if spy function never returned that value', function () {
    adderSpy(2, 3)
    expect(adderSpy.returned(6)).to.equal(false)
    expect(adderSpy.returned(7)).to.equal(false)
  })
})
