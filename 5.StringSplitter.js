// Write a recursive function that split a string based on a separator 
// (similar to String.prototype.split). Don't use JS array's split function 
// to solve this problem.
// Input: 02/20/2020
// Output: 02202020

let splitter = function(str, separator) {
  if (!str) {
    return ''
  }
  let curr = str[0]
  if (curr === separator) {
    curr = ''
  }
  return curr + splitter(str.slice(1), separator)
}

splitter('02/20/2020', '/')

// check to see if the string's length is 0
// check if first character is the separator
//   if it is, return empty string
//   if it is not, return the character
// recursively check string, minus first character and add the results

// input: '02/20/2020' output: '02202020'
// input: '022/0/2020' output: '02202020'
// input: '03/30/3030' output: '03303030'