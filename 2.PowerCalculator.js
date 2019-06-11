// Write a function called powerCalculator() that takes two parameters, 
// an integer as a base, and another integer as an exponent. The function 
// returns the value of the base raised to the power of the exponent. Use 
// only exponents greater than or equal to 0 (positive numbers)
// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

let powerCalculatorRec = function(int, pwr) {
  // base case
  if (pwr < 0) {
    return 'exponent should be >= 0'
  }
  else if (pwr === 0) {
    return 1
  }
  // recursion
  return int * powerCalculatorRec(int, pwr - 1)
}

console.log(powerCalculatorRec(10, 1))

// check to see if we have exponent >= 0
// check to see if exponent === 0
// multiply int by exponent - 1

// input: 10, 0 => output: 1
// input: 10, 1 => output: 10
// input: 10, 2 => output: 100
// input: 10, 3 => output: 1000