class Game {
  board = [];
  boardLength = 8;

  #knight;

  constructor() {
    this.createBoard();
    this.createKnight();
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

  createKnight() {
    this.#knight = new Knight(this.boardLength);
  }

  showGameBoard() {
    return this.board;
  }

  knightTraversal([startX, startY], [endX, endY]) {
    if (
      startX < 0 ||
      startY < 0 ||
      startX > this.boardLength ||
      startY > this.boardLength
    )
      return `Please choose a valid position. Between (0,0) - (${
        this.boardLength - 1
      },${this.boardLength - 1})`;
  }

  test([startX, startY], [endX, endY]) {
    // This function is manually checking if you can move the knight
    // from (0,0) to (0,1)
    // // possibly not the most optimal path

    if (
      startX < 0 ||
      startY < 0 ||
      startX > this.boardLength - 1 ||
      startY > this.boardLength - 1
    )
      return `Please choose a valid position. Between (0,0) - (${
        this.boardLength - 1
      },${this.boardLength - 1})`;
    return;
  }

  adjecencyList(xCoord, yCoord) {
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

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const newX = xCoord + move[0];
      const newY = yCoord + move[1];

      if (
        newX >= 0 &&
        newX <= this.boardLength - 1 &&
        newY >= 0 &&
        newY <= this.boardLength - 1 &&
        !this.board[newX][newY].visited
      ) {
        // check the current cell to visited
        this.board[xCoord][yCoord].visited = true;
        // set every new cell to visited
        this.board[newX][newY].visited = true;

        movesForSquare.push([newX, newY]);
      }
    }
    if (movesForSquare.length === 0) return 'Check input';

    return movesForSquare;
  }
}

class Knight {
  // by default the knight is located at (0,0)
  x = 0;
  y = 0;

  constructor(boardLength) {
    // this makes it so you don't have to pass parameters into the moves methods
    this.boardLength = boardLength;
  }
}

const game = new Game();

// console.log(game.board);
console.log(game.adjecencyList(4, 5));
console.log(game.adjecencyList(5, 7));
console.log(game.adjecencyList(0, -5));
