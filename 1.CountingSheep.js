// Write a recursive function that counts how many sheep jump over the fence. 
// Your program should take a number as input. That number should be the number 
// of sheep you have. The function should display the number along with the 
// message "Another sheep jumps over the fence" until no more sheep are left.
//Input: 3
// Output:
// 3: Another sheep jump over the fence
// 2: Another sheep jump over the fence
// 1: Another sheep jump over the fence
// All sheep jumped over the fence

let sheep = function(num) {
  // base case
  if (num === 0) {
    return 'All sheep jumped over the fence'
  }
  // recursion
  return `${num}: Another sheep jumps over the fence \n` + sheep(num - 1)
}

console.log(sheep(3))

// check to see if we are out of sheep
// count how many sheep we currently have
// check to see if we have any more sheep left to count

// input -> 3
// output -> 3: Another sheep jump over the fence