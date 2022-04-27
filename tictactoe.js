let currentPlayer = "X";
let winner = "";
let moves = 9;
let gameActive = true;
const playGround = ["", "", "", "", "", "", "", "", ""];

function gamePlay(id) {
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = currentPlayer;
    playGround[id] = currentPlayer;
  }
  checkWinner();
  playerTurn();
}

function playerTurn() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWinner() {
  if (
    playGround[0] === playGround[1] &&
    playGround[1] === playGround[2] &&
    playGround[2] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[3] === playGround[4] &&
    playGround[4] === playGround[5] &&
    playGround[5] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[6] === playGround[7] &&
    playGround[7] === playGround[8] &&
    playGround[8] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[0] === playGround[3] &&
    playGround[3] === playGround[6] &&
    playGround[6] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[1] === playGround[4] &&
    playGround[4] === playGround[7] &&
    playGround[7] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[2] === playGround[5] &&
    playGround[5] === playGround[8] &&
    playGround[8] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[0] === playGround[4] &&
    playGround[4] === playGround[8] &&
    playGround[8] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (
    playGround[2] === playGround[4] &&
    playGround[4] === playGround[6] &&
    playGround[6] !== ""
  ) {
    winner = currentPlayer;
    displayWinner();
    gameActive = false;
  } else if (moves < 2) {
    document.getElementById("winnerMessage").innerHTML = "It's a DRAW!";
    gameActive = false;
  } else {
    --moves;
  }
}

function displayWinner() {
  document.getElementById("winnerMessage").innerHTML = winner + "' s the WINNER!";
}
