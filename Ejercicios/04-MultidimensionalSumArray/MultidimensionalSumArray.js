function mdArraySum(arr) {
    if (!Array.isArray(arr)) return arr

    let sum = 0
    for (let i = 0; i < arr.length; i++) sum += mdArraySum(arr[i])

    return sum
}

module.exports = mdArraySum
