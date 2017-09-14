module.exports = (function () {
  const r1 = 10000.0
  const constantA = 1.129148e-3
  const constantB = 2.34125e-4
  const constantC = 8.76741e-8

  function toCelsius (value) {
    return toKelvin(value) - 273.15
  }

  function toKelvin (adc) {
    let adcVolt = adc * 0.488
    let adcRes = (adcVolt * r1) / (500 - adcVolt)
    return stainHart(adcRes) - 2742
  }

  function stainHart (r) {
    let logR = Math.log2(r)
    let logR3 = logR * logR * logR

    return 10 / (constantA + (constantB * logR) + (constantC * logR3))
  }

  return {
    toCelsius,
    toKelvin
  }
})()
