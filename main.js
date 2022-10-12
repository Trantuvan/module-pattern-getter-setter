const player = (name, icon) =>
  Object.freeze({
    get name() {
      return name;
    },
    get icon() {
      return icon;
    },
  });

const gameBoard = () => {
  const board = new Array(9).fill('');

  const at = (index) => ({
    get value() {
      return board[index];
    },
    set value(val) {
      board[index] = val;
    },
  });

  const reset = () => board.fill('');

  return Object.freeze({
    at,
    reset,
    get value() {
      return [...board];
    },
  });
};

const ticTacToe = (player1Name, player2Name) => {
  const board = gameBoard();
  const player1 = player(player1Name, 'X');
  const player2 = player(player2Name, 'O');
  let currentPlayer = player1;

  const swithPlayers = () => {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  };

  return Object.freeze({
    swithPlayers,
    // get board() {
    //   return board;
    // },
    board,
    get currentPlayer() {
      return currentPlayer;
    },
  });
};

const game = ticTacToe('Margaret', 'Bert');
game.board.at(4).value = game.currentPlayer.icon;
console.log(game.board.value);

game.swithPlayers();
game.board.at(0).value = game.currentPlayer.icon;
console.log(game.board.value);

console.log(JSON.stringify(game));
