const TRILLION = 1000000000000
const BILLION = 1000000000
const MILLION = 1000000
const THOUSAND = 1000
const HUNDRED = 100

const smallNumbers = Object.freeze({
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
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
})

const getBase = (num, base) => (Math.floor(num / base) * base)
const getRemainder = (num, base) => num % base

/**
 * Converts a one or two digit integer into word(s)
 * @param {integer} num - a one or two digit integer to be converted to a word
 * @returns {string} - the words that represent the two/one digit integer
 */
const twoDigitsToString = (num) => {
  let outputString
  if (num < 20) {
    outputString = smallNumbers[num]
  } else {
    outputString = smallNumbers[getBase(num, 10)]
    const remainderString = smallNumbers[getRemainder(num, 10)]
    if (remainderString) {
      outputString = `${outputString} ${smallNumbers[getRemainder(num, 10)]}`
    }
  }
  return outputString
}

/**
 * Converts a positive integer greater than zero to words
 * @param {integer} num - the positive number to process into words
 * @param {string[]} words - the previously processed number words
 * @returns {string} - the words for a given integer
 */
const wordBuilder = (num, words) => {
  let remainder
  const compWordArray = (!words) ? [] : words
  if (num / TRILLION >= 1) {
    compWordArray.push(wordBuilder(Math.floor(num / TRILLION)))
    compWordArray.push('trillion')
    remainder = num % TRILLION
  } else if (num / BILLION >= 1) {
    compWordArray.push(wordBuilder(Math.floor(num / BILLION)))
    compWordArray.push('billion')
    remainder = num % BILLION
  } else if (num / MILLION >= 1) {
    compWordArray.push(wordBuilder(Math.floor(num / MILLION)))
    compWordArray.push('million')
    remainder = num % MILLION
  } else if (num / THOUSAND >= 1) {
    compWordArray.push(wordBuilder(Math.floor(num / THOUSAND)))
    compWordArray.push('thousand')
    remainder = num % THOUSAND
  } else if (num / HUNDRED >= 1) {
    compWordArray.push(wordBuilder(Math.floor(num / HUNDRED)))
    remainder = num % HUNDRED
    compWordArray.push('hundred')
  } else if (num >= 1) {
    if (compWordArray.length >= 1) {
      compWordArray.push('and')
    }
    compWordArray.push(twoDigitsToString(num))
  } else {
    return compWordArray.join(' ')
  }
  return wordBuilder(remainder, compWordArray)
}

/**
 * Converts integers into words
 * @param {integer} num - an integer to convert into words
 * @returns {string} - the words that represent the given integer
 */
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
