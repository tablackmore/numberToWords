const numberToWords = require('./src/numberToWords')

// Converting a single number
const a = -123456789
// eslint-disable-next-line no-console
console.log(numberToWords(a))

// Converting an array of numbers
const numbers = [12030405, 789504345, 48757584, -348]
const numbersAsWords = numbers.map(numberToWords)
// eslint-disable-next-line no-console
console.log(numbersAsWords)
