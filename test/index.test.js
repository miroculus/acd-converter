/* eslint-env mocha */

const assert = require('assert')
const converter = require('../converter.js')

describe('should conver to acd', function () {
  it('to celsius', function () {
    let val = 500
    assert.equal(converter.toCelsius(val), val-100)

  })
})
