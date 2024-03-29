let currentPlayer = "X";
let winner = "";
let moves = 9;
const playGround = ["", "", "", "", "", "", "", "", ""];

function gamePlay(id) {
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = currentPlayer;
    playGround[id] = currentPlayer;
    --moves;
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
    (playGround[0] === playGround[1] &&
    playGround[1] === playGround[2] &&
    playGround[2] !== "") ||
    (playGround[3] === playGround[4] &&
    playGround[4] === playGround[5] &&
    playGround[5] !== "") ||
    (playGround[6] === playGround[7] &&
    playGround[7] === playGround[8] &&
    playGround[8] !== "") ||
    (playGround[0] === playGround[3] &&
    playGround[3] === playGround[6] &&
    playGround[6] !== "") ||
    (playGround[1] === playGround[4] &&
    playGround[4] === playGround[7] &&
    playGround[7] !== "") ||
    (playGround[2] === playGround[5] &&
    playGround[5] === playGround[8] &&
    playGround[8] !== "") ||
    (playGround[0] === playGround[4] &&
    playGround[4] === playGround[8] &&
    playGround[8] !== "") ||
    (playGround[2] === playGround[4] &&
    playGround[4] === playGround[6] &&
    playGround[6] !== "")
  ) {
    winner = currentPlayer;
    displayWinner();
  } else if (moves < 1) {
    document.getElementById("winnerMessage").innerHTML = "It's a DRAW!";
    document.getElementById("gameBoard").style.pointerEvents = "none";
  }
}

function displayWinner() {
  document.getElementById("winnerMessage").innerHTML = winner + "' s the WINNER!";
  document.getElementById("gameBoard").style.pointerEvents = "none";
}
