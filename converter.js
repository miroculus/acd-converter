module.exports = (function () {
  const constantA = 1.129148e-3
  const constantB = 2.34125e-4
  const constantC = 8.76741e-8
  const V_IN = 5
  const R1 = 10000
  const K = 3.0

  function SteinHart (R) {
    let logR = Math.log(R)
    let logR3 = logR * logR * logR
    return 1.0 / (constantA + constantB * logR + constantC * logR3)
  }

  function toKelvin (adc) {
    let adcRaw = 1023 - adc
    let adcRes = (adcRaw * R1) / (1023 - adcRaw)
    let adcVolt = (adcRaw * V_IN) / 1023

    return SteinHart(adcRes) - (adcVolt * adcVolt) / (K * adcRes)
  }

  function toCelsius (adc) {
    return toKelvin(adc) - 273.15
  }

  return {
    toCelsius,
    toKelvin
  }
})()
