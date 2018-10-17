const smallNumberMapping = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eightteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
}

const tripleCountToLargeNumber = {
  2: 'thousand',
  3: 'million',
  4: 'billion',
}

const mapNumber = num => smallNumberMapping[num.toString()]
const mapLargeNumberName = idx => (tripleCountToLargeNumber[idx] || '')

const getBase = (num, base) => (Math.floor(num / base) * base)
const getRemainder = (num, base) => num % base

const twoDigitsToString = (num) => {
  let outputString
  if (num < 20) {
    outputString = mapNumber(num)
  } else {
    outputString = mapNumber(getBase(num, 10))
    const remainderString = mapNumber(getRemainder(num, 10))
    if (remainderString) {
      outputString = `${outputString} ${mapNumber(getRemainder(num, 10))}`
    }
  }
  return outputString
}

const tripleToString = (num) => {
  let outputString
  if (num.toString().length < 3) {
    outputString = twoDigitsToString(num)
  } else {
    outputString = `${twoDigitsToString(num.toString()[0])} hundred`
    const remainder = getRemainder(num, 100)
    if (remainder > 0) {
      outputString = `${outputString} and ${twoDigitsToString(getRemainder(num, 100))}`
    }
  }
  return outputString || ''
}

const numberToTriples = (num) => {
  const numberArray = Array.from(num.toString())
  const triples = []
  while (numberArray.length > 0) {
    const lastTripleIndex = (numberArray.length >= 3) ? numberArray.length - 3 : 0
    triples.unshift(Number(numberArray.splice(lastTripleIndex, 3).join('')))
  }
  return triples
}

const numberToString = (num) => {
  if (num === 0) {
    return 'zero'
  }
  const triples = numberToTriples(num)
  const strNumber = triples.reduce((result, triple, idx) => {
    let outputString = result
    if (tripleToString(triple)) {
      outputString = `${outputString} ${tripleToString(triple)} ${mapLargeNumberName(triples.length - idx)}`
    }
    const shouldAddAnd = ((idx === 0)
                          && (triples.length > 1)
                          && triples[triples.length - 1]
                          && (triples[triples.length - 1] < 100))
    if (shouldAddAnd) {
      outputString += ' and'
    }
    return outputString
  }, '')
  return strNumber.trim()
}

module.exports = numberToString
