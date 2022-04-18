function MaxValue(shares) {
    let min = [...shares].sort((a, b) => a - b)[0]
    let max = [...shares]
        .splice(shares.indexOf(min))
        .sort((a, b) => a - b)
        .pop()

    return max - min
}

module.exports = MaxValue
