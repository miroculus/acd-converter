/* eslint-env mocha */

const assert = require('assert')
const converter = require('../converter.js')

describe('should conver to adc to celsius', function () {
  it('adc 512, should give ~25 celsius', function () {
    assert.equal(converter.toCelsius(512), 25.044031751056878)
  })

  it('adc 666, should give ~40 celsius', function () {
    assert.equal(converter.toCelsius(666), 39.83509698019253)
  })

  it('adc 817, should give ~60 celsius', function () {
    assert.equal(converter.toCelsius(817), 59.61975249394453)
  })

  it('adc 935, should give ~90 celsius ', function () {
    assert.equal(converter.toCelsius(935), 89.1192649219604)
  })
})

describe('should conver to adc to kelvin', function () {
  it('adc 512, should give ~298 kelvin', function () {
    assert.equal(converter.toKelvin(512), 298.19403175105685)
  })

  it('adc 666, should give ~312 kelvin', function () {
    assert.equal(converter.toKelvin(666), 312.9850969801925)
  })

  it('adc 817, should give ~332 kelvin', function () {
    assert.equal(converter.toKelvin(817), 332.7697524939445)
  })

  it('adc 935, should give ~362 kelvin ', function () {
    assert.equal(converter.toKelvin(935), 362.26926492196037)
  })
})
