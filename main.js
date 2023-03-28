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
    // this.#knight.moveUR();
    // this.#knight.moveRD();
    // this.#knight.moveRU();
    // this.#knight.moveUL();
    // this.#knight.moveUL();
    // this.#knight.moveLD();
    // this.#knight.moveRD();
    // this.#knight.moveLD();
    // this.#knight.moveDL();

    // this.board[this.#knight.x][this.#knight.y].visited = true;
    // return this.board[this.#knight.x][this.#knight.y];
  }

  adjecencyList(xCord, yCord, depth = 1, adList = {}) {
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

    // check the current cell to visited
    this.board[xCord][yCord].visited = false;

    for (let i = 0; i < moves.length; i++) {
      const move = moves[i];
      const newX = xCord + move[0];
      const newY = yCord + move[1];

      if (
        newX >= 0 &&
        newX < this.boardLength &&
        newY >= 0 &&
        newY <= this.boardLength &&
        !this.board[newX][newY].visited
      ) {
        // set every new cell to visited
        this.board[newX][newY].visited = true;

        movesForSquare.push([newX, newY]);
        console.log(this.board[newX][newY]);
      }
    }

    adList[(xCord, yCord)] = movesForSquare;
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

const temptArr = [0, 1, 2, 3, 4, 5].length;

// console.log(game.board);
console.log(game.adjecencyList(4, 4));
