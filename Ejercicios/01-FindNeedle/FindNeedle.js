function FindNeedle(haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            console.log(
                `${haystack} -> ${needle} \n` +
                    haystack.slice(0, i) +
                    "(" +
                    needle.toUpperCase() +
                    ")" +
                    haystack.slice(i + needle.length)
            )
            return i
        }
    }
    console.log(`${haystack} -> ${needle} \n-1`)
    return -1
}

module.exports = FindNeedle
