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

  knightTraversal(startPoint, endPoint) {
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

    return `(${startX},${startY}) is Valid`;
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
}

class Knight {
  // by default the knight is located at (0,0)
  x = 0;
  y = 0;

  constructor(boardLength) {
    // this makes it so you don't have to pass parameters into the moves methods
    this.boardLength = boardLength;
  }

  moveUL() {
    // up 2 l 1
    if (this.x - 1 < 0 || this.y + 2 > this.boardLength) return;
    this.x -= 1;
    this.y += 2;
  }

  moveUR() {
    // up 2 r 1
    if (this.x + 1 > this.boardLength || this.y + 2 > this.boardLength) return;
    this.x += 1;
    this.y += 2;
  }

  moveDL() {
    // d 2 l 1
    if (this.x - 1 < 0 || this.y - 2 < 0) return;
    this.x -= 1;
    this.y -= 2;
  }

  moveDR() {
    // d 2 r 1
    if (this.x + 1 > this.boardLength || this.y - 2 < 0) return;
    this.x += 1;
    this.y -= 2;
  }

  moveLU() {
    // l 2 up 1
    if (this.x - 2 < 0 || this.y + 1 < this.boardLength) return;
    this.x -= 2;
    this.y += 1;
  }

  moveLD() {
    // l 2 d 1
    if (this.x - 2 < 0 || this.y + 1 > this.boardLength) return;
    this.x -= 2;
    this.y -= 1;
  }

  moveRU() {
    // r 2 up 1
    if (this.x + 2 > this.boardLength || this.y + 2 > this.boardLength) return;
    this.x += 2;
    this.y += 1;
  }

  moveRD() {
    // r 2 d 1
    if (this.x < 0 || this.y < 0) return;
    this.x += 2;
    this.y -= 1;
  }
}

const game = new Game();

const temptArr = [0, 1, 2, 3, 4, 5].length;

console.log(game.test([7, 7], [0, 0]));
// console.log(game.board);
