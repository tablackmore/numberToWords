/* eslint-env mocha */
const assert = require('assert')
const numberToWord = require('./numberToWord')

describe('numberToWord', () => {
  it('should return the correct string for 0', () => {
    assert.equal(numberToWord(0), 'zero')
  })
  it('should return the correct string for numbers up to 19', () => {
    assert.equal(numberToWord(2), 'two')
    assert.equal(numberToWord(13), 'thirteen')
    assert.equal(numberToWord(19), 'nineteen')
  })
  it('should return the correct string for double digit numbers between 20 and 99', () => {
    assert.equal(numberToWord(30), 'thirty')
    assert.equal(numberToWord(42), 'fourty two')
    assert.equal(numberToWord(99), 'ninety nine')
  })
  it('should return the correct string for double digit numbers between 100 and 999', () => {
    assert.equal(numberToWord(100), 'one hundred')
    assert.equal(numberToWord(242), 'two hundred and fourty two')
    assert.equal(numberToWord(999), 'nine hundred and ninety nine')
  })
  it('should return the correct string for double digit numbers between 1000 and 999999', () => {
    assert.equal(numberToWord(1000), 'one thousand')
    assert.equal(numberToWord(20052), 'twenty thousand and fifty two')
    assert.equal(numberToWord(999999), 'nine hundred and ninety nine thousand nine hundred and ninety nine')
  })
  it('should return the correct string for double digit numbers between 1000000 and 9999999', () => {
    assert.equal(numberToWord(1000000), 'one million')
    assert.equal(numberToWord(27080520), 'twenty seven million eighty thousand five hundred and twenty')
    assert.equal(numberToWord(9999999), 'nine million nine hundred and ninety nine thousand nine hundred and ninety nine')
  })
})
