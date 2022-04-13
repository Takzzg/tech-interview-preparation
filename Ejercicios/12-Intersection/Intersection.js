function intersection(arr1, arr2) {

  // SOLUCION FUERZA BRUTA:
  // const result = []
  // arr1.forEach(num1 => {
  //   arr2.forEach(num2 => {
  //     if (num1 === num2) result.push(num1)
  //   })
  //  o if (arr2.includes(num1)) result.push(num1)
  // })
  // return result

  // SOLUCION OPTIMA PARA ARRAYS ORDENADOS:
  // const result = []
  // let i = 0
  // let j = 0
  // while (i < arr1.length && j < arr2.length) {
  //   const num1 = arr1[i]
  //   const num2 = arr2[j]

  //   if (num1 === num2) {
  //     result.push(num1)
  //     i++
  //     j++
  //   } else if (num1 < num2) i++
  //   else j++
  // }
  // return result

  

  // SOLUCIONES 'OPTIMAS'
  // 1 CON OBJETO
  const hashMap = {}
  for (const num of arr1) hashMap[num] = true
  return arr2.filter(num => hashMap[num])

  // 2 CON ARRAY ASOCIATIVO
  const ArrayAsociativo = []
  for (const num of arr1) ArrayAsociativo[num] = true
  return arr2.filter(num => ArrayAsociativo[num])

  // 3 CON MAP ES6
  const hash = new Map()
  for (const num of arr1) hash.set(num, true)
  return arr2.filter(num => hash.get(num))
}

module.exports = intersection;
