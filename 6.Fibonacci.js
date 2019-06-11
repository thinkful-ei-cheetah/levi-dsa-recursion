// Write a recursive function that prints the Fibonacci sequence of a given 
// number. The Fibonacci sequence is a series of numbers in which each number 
// is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number 
// in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

let fib = function(num) {
  if (num <= 0) {
    return 0
  }
  else if (num === 1) {
    return 1
  }
  return fib(num - 1) + fib(num - 2)
}

fib(4)

// check if num - 2 <= 0, if it is, return 0
// check if num - 1 = 1, if it is, return 1
// evaluate num - 1 and num - 2
//   return the sum

// input = 0 -> output = 0
// input = 1 -> output = 1    
// input = 2 -> output = 1, 1   = fib(1) + fib(0)
// input = 3 -> output = 1, 1, 2    = fib(2) + fib(1)
// input = 4 -> output = 1, 1, 2, 3   = fib(3) + fib(2)
// input = 5 -> output = 1, 1, 2, 3, 5    = fib(4) + fib(3)
// input = 6 -> output = 1, 1, 2, 3, 5, 8   = fib(5) + fib(4)
// fib(0) = 0
// fib(1) = 1
// fib(2) = 1 => fib(1) + fib(0)
// fib(3) = 2 => fib(2) + fib(1)
// fib(4) = 3 => fib(3) + fib(2)
// fib(5) = 5 => fib(4) + fib(3)