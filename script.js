const submitBtn = document.getElementById("submit");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const inputSection = document.getElementById("input-section");
const boardSection = document.getElementById("board-section");
const message = document.getElementById("message");

const cells = document.querySelectorAll(".cell");

let player1 = "";
let player2 = "";

let currentPlayer = "";
let CurrentSymbol = "x";

let gameOver = false;

submitBtn.addEventListener("click", ()=> {
	player1 = player1Input.value.trim();
	player2 = player2Input.value.trim();

	if (!player1 || !player2) {
		alert("Please enter names for both players!");
		return;
	}
	inputSection.style.display = "none";
	boardSection.style.display = "flex";
	currentPlayer = player1;
	message.textContent = `${currentPlayer}, you're up`;
});

//on cell  click

cells.forEach(cell => {
	cell.addEventListener("click", () => {
		if(gameOver || cell.textContent !== "") return;
		cell.textContent = CurrentSymbol; //lowercase x or o;

		if(checkWinner()) {
			message.textContent = `${currentPlayer} congratulations you won!`;
			gameOver = true;
			return;
		}

		//switch turn

		CurrentSymbol = CurrentSymbol === "x"?"o" : "x";
		currentPlayer = currentPlayer === player1?player2 : player1;
		message.textContent = `${currentPlayer} you're up`;
	});
});

//check winning combi

function checkWinner() {
	const WinCombos = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
		[1, 5, 9],
		[3, 5, 7],
	];
	return WinCombos.some(combo => {
		const [a, b,c] = combo.map(id => document.getElementById(id).textContent);
		return a && a === b && b === c;
	});
}