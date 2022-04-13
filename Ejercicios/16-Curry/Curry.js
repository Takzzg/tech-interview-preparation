function curry(fn) {

  const args = []
  return function curried (arg1) {
    args.push(arg1)
    console.log(args)
    if (args.length === fn.length) return fn(...args)
    return function curried2 (newArg) {
      return curried(newArg)
    }
  }
  
  console.log('FUNC.LENGTH:', fn.length)
  const curried = (...args) => {
    console.log('ARGUMENTOS:', args)
    if (args.length === fn.length) return fn(...args)
    const nextCurried = (nextNum) => curried(...args, nextNum)
    return nextCurried
  }
  return curried
}

// return function (firstParam) {
//   return function (secundParam) {
//     return function (thirdParam) {
//       return function (fourthParam) {
//         return fn(firstParam, secundParam, thirdParam, fourthParam)
//       }
//     }
//   }
// }

module.exports = curry;

// JavaScript es un lenguaje orientado a objetos, con herencia prototipal.
// Los lenguajes funcionales tienen soporte nativo para currying pero en JS lo tenemos que
// hacer nosotros.

// Haskell, Lips, F# etc.