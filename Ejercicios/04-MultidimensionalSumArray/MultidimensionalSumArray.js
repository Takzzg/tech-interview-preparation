function mdArraySum(arr) {

  let acc = 0
  for (const elm of arr) {
    console.log(elm)
    if (typeof elm === 'number') acc = acc + elm
    else acc = acc + mdArraySum(elm)
  }
  return acc

  // for (const num of arr) {
  //   if (typeof num === 'number') acc += num
  //   else acc = mdArraySum(num, acc)
  // }
  // return acc

  for (const num of arr) {
  acc = typeof num === 'number' ? acc + num : mdArraySum(num, acc)
  }

  return arr.reduce((acc, elm) => acc + (typeof elm === 'number' ? elm : mdArraySum(elm)), 0)

  return acc
  //O(n)

}

module.exports = mdArraySum;
