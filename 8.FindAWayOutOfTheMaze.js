// You have entered a Maze and need to find your way out of it. There are 
// more than one possible exit from the Maze. Write a recursive function 
// that will help you find a possible exit though the maze

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a NM matrix (in the above case, a 3X3 or a 5X7 array). 
// The starting point is the top left corner and the exit is indicated by e. For 
// simplicity purpose, use the bottom right corner of the maze as the exit. You can't go 
// outside the boundaries of the maze. The maze has passages that are blocked and you can't 
// go through them. These blocked passages are indicated by ``. Passing through a blocked cell 
// as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit can be RRDDLLDDRRRRRR

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let escape = function(maze, pos=0, row=0, col=0, dir='S' , path = []) {
  if (col < 0 || row < 0) return;
  else if (col >= maze[0].length || row >= maze.length) return;
  
  path[pos] = dir;
  pos++;

  if(maze[row][col] === 'e'){
    console.log(path);
    return;
  }

  if(maze[row][col] === ' '){
    // The current cell is free. Mark it as visited
    maze[row][col] = 's';
    // Invoke recursion ot explore all possible directions
    escape(maze, pos, row - 1, col, 'U', path); // Up
    escape(maze, pos, row, col + 1, 'R', path); // Right
    escape(maze, pos, row + 1, col, 'D', path); // Down
    escape(maze, pos, row, col - 1, 'L', path); // Left
  }
  // Remove the last direction from the path
  pos--;
}

escape(mySmallMaze)

// are we at the exit?
//   if so, we're done
//     return our path to freedom
// are we out of bounds?
//   if so, we're on a bad path => return false
// are we in an open path?
//   if not, we're on a bad path => return false
//   if we are on an open path...
//     Make note of our movement
//     then...
//       try right
//       try down
//       try left
//       try up

// escape([
//   [' ', '*']      // DR
//   [' ', 'e']
// ])

// escape([
//   [' ', ' ']      // RD
//   ['*', 'e']
// ])