function spyOn(fn) {
  let callCount = 0
  const called = new Map()
  const returned = new Map()

  const spy = (...args) => {
    callCount++
    for (const arg of args) called.set(arg, true)
    // called.set(a, true)
    // called.set(b, true)
    // const response = fn(a, b)
    const response = fn(...args)
    returned.set(response, true)
    return response
  }

  spy.getCallCount = () => callCount
  spy.wasCalledWith = (a) => !!called.get(a)
  spy.returned = (a) => !!returned.get(a)

  return spy
}

module.exports = spyOn;
