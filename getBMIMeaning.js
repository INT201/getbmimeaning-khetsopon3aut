const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height^2)
}
function getBMIMeaning(weight, height) {
  //code here
  let BMI =calculateBMI(weight,height)
  return BMI < 18.5 ? 'Underweight': BMI >25.0 ? 'Overweight' : 'Normal weight'
}
module.exports = getBMIMeaning
