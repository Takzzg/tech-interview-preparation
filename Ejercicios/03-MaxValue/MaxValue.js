function MaxValue (shares) {
  let maxDif = shares[1] - shares[0]
  for (let i = 0; i < shares.length; i++) {
    const compra = shares[i]
    console.log(compra)
    for (let j = i + 1; j < shares.length; j++) {
      const venta = shares[j]
      const currentDif = venta - compra
      if (currentDif > maxDif) maxDif = currentDif
    }
  }
  return maxDif


// Complejidad O(n^2)

  // Solucion Óptima:
  // let maxDif = shares[1] - shares[0]
  let minPrice = shares[0]
  // console.log(minPrice)
  shares.forEach(stock => {
    // console.log(stock)
    // minPrice = Math.min(minPrice, stock)
    // minPrice = stock < minPrice ? stock : minPrice
    if (stock < minPrice) minPrice = stock
    // console.log(minPrice)
    const actualDif = stock - minPrice
    // console.log(actualDif)
    // maxDif = Math.max(maxDif, actualDif)
    // maxDif = actualDif > maxDif ? actualDif : maxDif
    if (actualDif > maxDif) maxDif = actualDif
    // console.log(maxDif)
  })
  return maxDif
}

module.exports = MaxValue

// console.log(MaxValue([23, 7, 3, 4, 8, 6])) // 5
// console.log(MaxValue([4, 3, 2, 5, 11])) // 9
console.log(MaxValue([-4, -23, -1, -25, -11]))
