document.addEventListener("DOMContentLoaded", function () {

  const submitBtn = document.getElementById("submit");
  const messageDiv = document.querySelector(".message");
  const cells = document.querySelectorAll(".cell");

  let player1 = "";
  let player2 = "";
  let currentPlayer = "";
  let currentSymbol = "X";
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

  submitBtn.addEventListener("click", () => {
    const p1Input = document.getElementById("player1");
    const p2Input = document.getElementById("player2");

    if (!p1Input || !p2Input) return;

    player1 = p1Input.value.trim();
    player2 = p2Input.value.trim();

    if (!player1 || !player2) return;

    document.getElementById("player-form").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    currentPlayer = player1;
    messageDiv.textContent = `${currentPlayer}, you're up`;
  });

  cells.forEach(cell => {
    cell.addEventListener("click", () => {
      if (cell.textContent !== "" || gameOver) return;

      cell.textContent = currentSymbol;

      if (checkWin()) {
        messageDiv.textContent = `${currentPlayer} congratulations you won!`;
        gameOver = true;
        return;
      }

      if (currentSymbol === "X") {
        currentSymbol = "O";
        currentPlayer = player2;
      } else {
        currentSymbol = "X";
        currentPlayer = player1;
      }

      messageDiv.textContent = `${currentPlayer}, you're up`;
    });
  });

  function checkWin() {
    return winPatterns.some(pattern =>
      pattern.every(id =>
        document.getElementById(id).textContent === currentSymbol
      )
    );
  }

});

}