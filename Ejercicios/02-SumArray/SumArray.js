const SumArray = (arr, n) => {
    let left = 0
    let right = arr.length - 1

    if (arr[left] === arr[right]) return false
    if (n === arr[left] + arr[right]) return true

    if (n - arr[right] - arr[left] > 0) left++
    else right--

    return SumArray(arr.slice(left, right + 1), n)
}

module.exports = SumArray
