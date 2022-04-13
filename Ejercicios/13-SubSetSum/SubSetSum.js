function subsetSum(nums, n) {
// SOLUCION 1
// Construir un arreglo de todas las sumas posibles:

// Inicializa el arreglo de sumas con 0
// Itera sobre el arreglo de números
// Itera sobre el arreglo de sumas, chequeando si el elemento actual + la suma es igual al target
// Si la nueva suma es menor que el target guardalo en el arreglo de sumas

  // for (const num of nums) {
  //   const copySums = sums.slice()
  //   for (const sum of copySums) {
  //     const actualSum = num + sum
  //     if (actualSum === n) return true
  //     if (actualSum < n) sums.push(actualSum)
  //   }
  // }
  // return false
  // Podemos estar agregando valores repetidos al arreglo que nos dan el mismo resultado

  // Optimización
  // SOLUCION 2  Iterativa con Set
  // const sums = new Set([0])
  // for (const num of nums) {
  //   const copySums = [...sums]
  //   for (const sum of copySums) {
  //     const actualSum = num + sum
  //     if (actualSum === n) return true
  //     if (actualSum < n) sums.add(actualSum)
  //   }
  // }
  // return false
  // EVITAMOS agregar elementos repetidos sin agregar complejidad
 // O(2 ^ n): Complejidad Exponencial
//  Cuando un algoritmo tiene complejidad exponencial, su rendimiento se incrementa al doble cada vez que se agregue un nuevo dato al valor de entrada, por ende, incrementando su tamaño de manera exponencial.
// Esto quiere decir que si tenemos un arreglo con 1 elemento y nos toma 10 segundos ejecutar el algoritmo, con 2 elementos nos deberá tomar 100 segundos, con 3 nos deberá tomar 1000, continuando de manera sucesiva.
// hay que recorrer todo el arreglo, y no tener ninguna suma repetida

// EJ: Fibonacci.

}

module.exports = subsetSum;
