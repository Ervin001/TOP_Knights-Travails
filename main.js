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
  }
}

const game = new Game();

// console.log(game.board);
// console.log(game.adjecencyList(4, 5));
// console.log(game.adjecencyList(5, 7));
// console.log(game.adjecencyList(0, 5));
game.adjecencyList(0, 5);
