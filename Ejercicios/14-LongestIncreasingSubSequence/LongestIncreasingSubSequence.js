function longestIncreasingSubsequence(nums) {
  const sequences = []
  let longest = 0

  for (const num of nums) {
    sequences.push([num])
    const sequencesCopy = [...sequences]
    for (const seq of sequencesCopy) {
      if (num > seq[seq.length - 1]) {
        const newSeq = [...seq, num]
        sequences.push(newSeq)
        longest = newSeq.length > longest ? newSeq.length : longest
      }
    }
  }

  return longest

}
  // O(2^n)


module.exports = longestIncreasingSubsequence;

// console.log(longestIncreasingSubsequence([3, 10, 4, 5]))// (3)
// console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]))// (3)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80]))// (6)
// console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]))// (9)

