  const submitBtn = document.getElementById("submit");
    const gameDiv = document.getElementById("game");
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
      player1 = document.getElementById("player-1").value.trim();
      player2 = document.getElementById("player-2").value.trim();

      if (!player1 || !player2) {
        alert("Enter both player names");
        return;
      }

      document.getElementById("player-form").classList.add("hidden");
      gameDiv.classList.remove("hidden");

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

        // Switch player
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
      return winPatterns.some(pattern => {
        return pattern.every(id => {
          return document.getElementById(id).textContent === currentSymbol;
        });
      });
    }