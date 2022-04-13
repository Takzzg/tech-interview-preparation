function SumArray (arr, n) {
  // Your code here:

  // for (let i = 0; i < arr.length - 1; i++) {
  //   const num1 = arr[i]
  //   // Itero sobre los números siguientes
  //   for (let j = i + 1; j < arr.length; j++) {
  //     const num2 = arr[j]
  //     // Veo si son iguales a la suma y devuelvo true
  //     if (num1 + num2 === n) return true
  //   }
  // }
  // // Si termine de recorrer el arreglo devuelvo alse
  // return false

    // Creo un puntero para el principio y el final
    let start = 0
    let end = arr.length - 1
    // Mientras el puntero del principio sea menor al del final
    while (start < end) {
      // guardo el resultado de la suma
      const sum = arr[start] + arr[end]
      // Si son iguales devuelvo true
      if (sum === n) return true
      // Si es menor aumento el puntero de start
      else if (sum < n) start += 1
      // Si es mayor decremento el puntero de end
      else end -= 1
    }
    // Si salimos del for loop significa que no hay coincidencia
    return false
  
}

module.exports = SumArray
