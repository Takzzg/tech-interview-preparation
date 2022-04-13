//  it('should be case insensitive & works for the first word too', () => {
//  expect(FindWordStartingWith(book, 'era')).to.deep.equal([0, 39])
//  })

function FindWordStartingWith(book, query) {
  const txt = book.text.toLowerCase()

  const res = []
  // for (let i = 0; i < txt.length; i++) {
  //   if (txt[i - 1] === ' ' || i === 0) {
  //     for (let j = 0; j < query.length; j++) {
  //       if (txt[i + j] !== query[j]) break
  //       if (j === query.length - 1) res.push(i)
  //     }
  //   }
  // }

  for (let i = 0; i < txt.length; i++) {
    if (txt[i - 1] === ' ' || i === 0) { // si es la primera letra o la antecede un espacio
      if (txt.slice(i, i + query.length) === query) res.push(i) // la comparo junto las siguientes con el query y si matchea pusheo i
      i += query.length
    }
  }
  return res
  // O(n) ??
}

module.exports = FindWordStartingWith;
