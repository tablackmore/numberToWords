const TRILLION = 10000000000
const BILLION = 100000000
const MILLION = 1000000
const THOUSAND = 1000
const HUNDRED = 100


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

const mapNumber = num => smallNumberMapping[num.toString()]

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

const wordBuilder = (num, word) => {
  let remainder
  const sentanceArr = (!word) ? [] : word
  if (num / TRILLION >= 1) {
    sentanceArr.push(wordBuilder(Math.floor(num / TRILLION)))
    sentanceArr.push('trillion')
    remainder = num % TRILLION
  } else if (num / BILLION >= 1) {
    sentanceArr.push(wordBuilder(Math.floor(num / BILLION)))
    sentanceArr.push('billion')
    remainder = num % BILLION
  } else if (num / MILLION >= 1) {
    sentanceArr.push(wordBuilder(Math.floor(num / MILLION)))
    sentanceArr.push('million')
    remainder = num % MILLION
  } else if (num / THOUSAND >= 1) {
    sentanceArr.push(wordBuilder(Math.floor(num / THOUSAND)))
    sentanceArr.push('thousand')
    remainder = num % THOUSAND
  } else if (num / HUNDRED >= 1) {
    sentanceArr.push(wordBuilder(Math.floor(num / HUNDRED)))
    remainder = num % HUNDRED
    sentanceArr.push('hundred')
  } else if (num >= 1) {
    if (sentanceArr.length >= 1) {
      sentanceArr.push('and')
    }
    sentanceArr.push(twoDigitsToString(num))
  } else {
    return sentanceArr.join(' ')
  }
  return wordBuilder(remainder, sentanceArr)
}

const numberToWord = (num) => {
  const intNumber = parseInt(num, 10)
  if (intNumber === 0) {
    return 'zero'
  }
  if (intNumber < 0) {
    const posIntNumber = Math.abs(intNumber)
    return `minus ${wordBuilder(posIntNumber)}`
  }
  return wordBuilder(intNumber)
}

module.exports = numberToWord
