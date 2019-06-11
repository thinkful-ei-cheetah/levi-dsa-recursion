// Write a recursive function that finds the factorial of a given number. The 
// factorial of a number can be found by multiplying that number by each number 
// between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

let factorial = function(num) {
  if(num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}

factorial(5)

// check to see if num equals 1,
//   if so, return 1
// multiply num by the factorial of num minus 1

// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120