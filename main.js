class Game {
  board = [];
  boardLength = 8;

  #knight;

  constructor() {
    this.createBoard();
  }

  createBoard() {
    // loop to create the rows of arrays
    for (let i = 0; i < this.boardLength; i++) {
      this.board[i] = [];
    }

    // loop to populate the array
    for (let n = 0; n < this.boardLength; n++) {
      for (let j = 0; j < this.boardLength; j++) {
        this.board[n][j] = {
          x: n,
          y: j,
          value: 0,
          visited: false,
        };
      }
    }
  }

  showGameBoard() {
    return this.board;
  }

  showMoves(moves) {
    console.log(
      `Congratulations you made it in ${
        moves.length - 1
      } moves!  Here is your path`
    );
    moves.forEach((move) => {
      console.log(move);
    });
  }

  knightTraversal(start, end) {
    let level = 0;
    let queue = [start];
    const visited = new Set(queue);
    const distance = { [start]: { distance: 0, path: [start] } };

    // go while queue is not empty
    while (queue.length > 0) {
      // Base Case
      if (
        start[0] < 0 ||
        start[1] < 0 ||
        end[0] < 0 ||
        end[1] < 0 ||
        start[0] > this.board.length - 1 ||
        start[1] > this.board.length - 1 ||
        end[0] > this.board.length - 1 ||
        end[1] > this.board.length - 1
      )
        return console.log('Not a valid location');

      // Base case if only one x or y
      if (start.length !== 2) return console.log('Check your start point');
      if (end.length !== 2) return console.log('Check your end point');

      //get first element
      const currentPosition = queue.shift();

      // Check if current matches
      if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
        // return `Found [${currentPosition}] in level ${level}`;
        return this.showMoves(distance[currentPosition].path);
      }

      // Increase level
      level++;

      const neighbors = this.neighbors(currentPosition[0], currentPosition[1]);

      // check if neighbor has been visited
      const unvisitedNeighbors = neighbors.filter(
        (neighbor) => !visited.has(neighbor.toString())
      );

      //add neighbors to queue
      unvisitedNeighbors.forEach((neighbor) => {
        queue.push(neighbor);
        visited.has(neighbor.toString());
        distance[neighbor] = {
          distance: level,
          path: [...distance[currentPosition].path, neighbor],
        };
      });
    }
  }

  // Gets all the neighbors of a point
  neighbors(xCoord, yCoord) {
    const moves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    const movesForSquare = [];

    // Current pos set visited
    this.board[xCoord][yCoord].visited = true;

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const newX = xCoord + move[0];
      const newY = yCoord + move[1];

      //check if move is valid
      if (
        newX >= 0 &&
        newX < this.boardLength &&
        newY >= 0 &&
        newY < this.boardLength &&
        !this.board[newX][newY].visited
      ) {
        // Prevent repetitive moves
        this.board[newX][newY].visited = true;

        // Move valid move to new array
        movesForSquare.push([newX, newY]);
      }
    }

    return movesForSquare;
  }
}

const game = new Game();

// console.log(game.board);
// console.log(game.neighbors(4, 5));
// console.log(game.neighbors(5, 7));
// console.log(game.neighbors(0, 5));
// console.log(game.knightTraversal([3, 3], [4, 3]));
// game.knightTraversal([39, 5], [7, 0]); // Throws errors, out of range
// game.knightTraversal([7, 5], [0, 3]);
game.knightTraversal([7, 7], [0, 0]);
