//your JS code here. If required.
let boxes = document.querySelectorAll(".box");
let turnO = true;

const winPatterns = [
	[0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach(box) => {
	box.addEventListener("click", () => {
		if(turnO) {
			box.innerText = "O";
			turnO = false;
		} else {
			box.innerText = "X";
			turnO = true;
		}
	})
}
const showWinner = (winner) => {
	msg.innerText =`${currentPlayer}, congratulation you won!`
}

const checkWinner = () => {
	for(let pattern of winPatterns) {
		let pos1Val = [pattern[0]].innerText;
		let pos2Val = [pattern[1]].innerText;
		let pos3Val = [pattern[2]].innerText;

		if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
			if(pos1Val === pos2Val && pos2Val === pos3Val) {
				showWinner(pos1Val);
				return true;
			}
		}
	}
};