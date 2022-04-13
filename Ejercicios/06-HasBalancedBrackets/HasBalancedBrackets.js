function HasBalancedBrackets(string) {
  const openingBrackets = []
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (const bracket of string) {
    if (brackets[bracket]) {
      openingBrackets.push(bracket)
    } else if (brackets[openingBrackets.pop()] !== bracket) return false
  }
  return !openingBrackets.length
}

module.exports = HasBalancedBrackets;
