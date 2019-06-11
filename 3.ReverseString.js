// Write a function that reverses a string. Take a string as input, 
// reverse the string, and return the new string.
let reversi = function(str) {
  // base case
  if (!str) {
    return '';
  }
  // recursion
  return reversi(str.slice(1)) + str[0]
}

reversi('hello')

// check if string is empty
// process string, minus first letter
// add first letter to end

// input = 'hello' -> output = 'olleh'