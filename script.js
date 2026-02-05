document.addEventListener("DOMContentLoaded", function () {

  const submitBtn = document.getElementById("submit");
  const messageDiv = document.querySelector(".message");
  const cells = document.querySelectorAll(".cell");

  let player1 = "";
  let player2 = "";
  let currentPlayer = "";
  let currentSymbol = "x";
  let gameOver = false;

  const winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ];

  submitBtn.addEventListener("click", function () {
    const p1 = document.getElementById("player1");
    const p2 = document.getElementById("player2");

    if (!p1 || !p2) return;

    player1 = p1.value.trim();
    player2 = p2.value.trim();

    if (!player1 || !player2) return;

    document.getElementById("player-form").style.display = "none";
    document.getElementById("game").style.display = "block";

    currentPlayer = player1;
    currentSymbol = "X";
    messageDiv.textContent = `${currentPlayer}, you're up`;
  });

  cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
      if (cell.textContent !== "" || gameOver) return;

      cell.textContent = currentSymbol;

      if (checkWin()) {
        messageDiv.textContent = `${currentPlayer} congratulations you won!`;
        gameOver = true;
        return;
      }

      if (currentSymbol === "x") {
        currentSymbol = "o";
        currentPlayer = player2;
      } else {
        currentSymbol = "x";
        currentPlayer = player1;
      }

      messageDiv.textContent = `${currentPlayer}, you're up`;
    });
  });

  function checkWin() {
    return winPatterns.some(function (pattern) {
      return pattern.every(function (id) {
        return document.getElementById(id).textContent === currentSymbol;
      });
    });
  }

});
