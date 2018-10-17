/* eslint-env jest */
const assert = require('assert')
const numberToString = require('./numberToString')

describe('numberToString', () => {
  it('should return the correct string for numbers up to 19', () => {
    assert.equal(numberToString(2), 'two')
    assert.equal(numberToString(13), 'thirteen')
    assert.equal(numberToString(19), 'nineteen')
  })
  it('should return the correct string for double digit numbers between 20 and 99', () => {
    assert.equal(numberToString(30), 'thirty')
    assert.equal(numberToString(42), 'fourty two')
    assert.equal(numberToString(99), 'ninety nine')
  })
  it('should return the correct string for double digit numbers between 100 and 999', () => {
    assert.equal(numberToString(100), 'one hundred')
    assert.equal(numberToString(242), 'two hundred and fourty two')
    assert.equal(numberToString(999), 'nine hundred and ninety nine')
  })
  it('should return the correct string for double digit numbers between 1000 and 999999', () => {
    assert.equal(numberToString(1000), 'one thousand')
    assert.equal(numberToString(20052), 'twenty thousand and fifty two')
    assert.equal(numberToString(999999), 'nine hundred and ninety nine thousand nine hundred and ninety nine')
  })
  it('should return the correct string for double digit numbers between 1000000 and 9999999', () => {
    assert.equal(numberToString(1000000), 'one million')
    assert.equal(numberToString(27080520), 'twenty seven million eighty thousand five hundred and twenty')
    assert.equal(numberToString(9999999), 'nine million nine hundred and ninety nine thousand nine hundred and ninety nine')
  })
  it('should return the correct string for 0', () => {
    assert.equal(numberToString(0), 'zero')
  })
})
