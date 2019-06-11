// Use the above maze and modify your solution so it finds All the possible exits 
// through the Maze. To find all possible exit through the maze, think about how many 
// places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits. Your recursive function should print all 
// three of the paths with the proper directions. For example, given the maze 
// above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', 'e'],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', 'e', ' ', ' ', ' ', ' ']
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
    // Mark back the current cell as free
    maze[row][col] = ' ';
  }
  // Remove the last direction from the path
  pos--;
}

escape(maze)