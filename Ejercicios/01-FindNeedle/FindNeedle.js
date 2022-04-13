function FindNeedle (haystack, needle) {
  // Your code here:

  console.log(haystack)
  //                               ^
  console.log(needle)

  // for (let i = 0; i < haystack.length; i++) {
  //   for (let j = 0; j < needle.length; j++) {
  //     if (needle[j] !== haystack[i + j]) break
  //     if (j === needle.length - 1) return i
  //   }
  // }
  // return -1

  // O(n*m)
  // n = haystack.length
  // m = needle.length

  for (let i = 0; i < haystack.length; i++) {
    console.log(haystack.slice(i, i + needle.length))

    if (haystack.slice(i, i + needle.length) === needle) return i
  }
  return -1

  // O(n*m)
}

module.exports = FindNeedle

console.log(FindNeedle('react-redux', 'redux')) // 6
// console.log(FindNeedle("rereredux", "reredux")) // 2
// console.log(FindNeedle("pinky", "puntual")) // -1
