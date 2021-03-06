/* eslint-env mocha */
const assert = require('assert')
const numberToWords = require('./numberToWords')

describe('numberToWords', () => {
  it('should return the word for 0', () => {
    assert.equal(numberToWords(0), 'zero')
  })
  it('should return the words for numbers up to 19', () => {
    assert.equal(numberToWords(1), 'one')
    assert.equal(numberToWords(2), 'two')
    assert.equal(numberToWords(3), 'three')
    assert.equal(numberToWords(4), 'four')
    assert.equal(numberToWords(5), 'five')
    assert.equal(numberToWords(6), 'six')
    assert.equal(numberToWords(7), 'seven')
    assert.equal(numberToWords(8), 'eight')
    assert.equal(numberToWords(9), 'nine')
    assert.equal(numberToWords(10), 'ten')
    assert.equal(numberToWords(11), 'eleven')
    assert.equal(numberToWords(12), 'twelve')
    assert.equal(numberToWords(13), 'thirteen')
    assert.equal(numberToWords(14), 'fourteen')
    assert.equal(numberToWords(15), 'fifteen')
    assert.equal(numberToWords(16), 'sixteen')
    assert.equal(numberToWords(17), 'seventeen')
    assert.equal(numberToWords(18), 'eighteen')
    assert.equal(numberToWords(19), 'nineteen')
  })
  it('should return the words for double digit numbers above 20', () => {
    assert.equal(numberToWords(30), 'thirty')
    assert.equal(numberToWords(40), 'fourty')
    assert.equal(numberToWords(50), 'fifty')
    assert.equal(numberToWords(60), 'sixty')
    assert.equal(numberToWords(70), 'seventy')
    assert.equal(numberToWords(80), 'eighty')
    assert.equal(numberToWords(90), 'ninety')
    assert.equal(numberToWords(31), 'thirty one')
    assert.equal(numberToWords(42), 'fourty two')
    assert.equal(numberToWords(53), 'fifty three')
    assert.equal(numberToWords(64), 'sixty four')
    assert.equal(numberToWords(75), 'seventy five')
    assert.equal(numberToWords(86), 'eighty six')
    assert.equal(numberToWords(97), 'ninety seven')
    assert.equal(numberToWords(88), 'eighty eight')
    assert.equal(numberToWords(79), 'seventy nine')
  })
  it('should return the words for triple digit numbers', () => {
    assert.equal(numberToWords(100), 'one hundred')
    assert.equal(numberToWords(242), 'two hundred and fourty two')
    assert.equal(numberToWords(999), 'nine hundred and ninety nine')
  })
  it('should return the words for double digit numbers between 1000 and 999999', () => {
    assert.equal(numberToWords(1000), 'one thousand')
    assert.equal(numberToWords(20052), 'twenty thousand and fifty two')
    assert.equal(numberToWords(999999), 'nine hundred and ninety nine thousand nine hundred and ninety nine')
  })
  it('should return the words for numbers between a million and 999 million', () => {
    assert.equal(numberToWords(1000000), 'one million')
    assert.equal(numberToWords(1111234), 'one million one hundred and eleven thousand two hundred and thirty four')
    assert.equal(numberToWords(20000009), 'twenty million and nine')
    assert.equal(numberToWords(401002700), 'four hundred and one million two thousand seven hundred')
  })
  it('should return the words for numbers between a billion and 999 billion', () => {
    assert.equal(numberToWords(1000000000), 'one billion')
    assert.equal(numberToWords(57234000002), 'fifty seven billion two hundred and thirty four million and two')
    assert.equal(numberToWords(990200000308), 'nine hundred and ninety billion two hundred million three hundred and eight')
  })
  it('should return the words for numbers between a trillion and 999 trillion', () => {
    assert.equal(numberToWords(1000000000000), 'one trillion')
    assert.equal(numberToWords(30267000050000), 'thirty trillion two hundred and sixty seven billion fifty thousand')
    assert.equal(numberToWords(999008004000301), 'nine hundred and ninety nine trillion eight billion four million three hundred and one')
  })
  it('should return the words for negative numbers', () => {
    assert.equal(numberToWords(-12), 'minus twelve')
    assert.equal(numberToWords(-304512), 'minus three hundred and four thousand five hundred and twelve')
  })
})
