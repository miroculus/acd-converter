/* eslint-env mocha */

const assert = require('assert')
const converter = require('../converter.js')

describe('should conver to acd to celsius', function () {
  it('to celsius', function () {
    let val = 500
    assert.equal(converter.toCelsius(val), -755.9838235622623)
  })
})

describe('should conver to acd to kelvin', function () {
  it('100', function () {
    assert.equal(converter.toKelvin(100), 52.360913671096114)
  })

  it('200', function () {
    assert.equal(converter.toKelvin(200), -168.8532311940894)
  })

  it('300', function () {
    assert.equal(converter.toKelvin(300), -299.6207544896333)
  })

  it('400', function () {
    assert.equal(converter.toKelvin(400), -398.362268980728)
  })

  it('500', function () {
    assert.equal(converter.toKelvin(500), -482.8338235622623)
  })
})
