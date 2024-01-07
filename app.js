let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("A box was clicked");
    if (turnO) {
      //Player O Turn
      box.innerText = "O";
      box.style.color = "Blue";
      turnO = false; //Player X Turn
    } else {
      box.innerText = "X";
      box.style.color = "Red";
      turnO = true; //Player O Turn
    }
    box.disabled = true;
    checkWinner();
  });
});

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     //console.log(pattern); // Print the arrays values for us.
//     console.log(pattern[0], pattern[1], pattern[2]); // Print the arrays positions for us.
//     //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); // Acces the boxes via this.
//     //console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); // Acces the boxes via this.
//     console.log(
//       boxes[pattern[0]].innerText,
//       boxes[pattern[1]].innerText,
//       boxes[pattern[2]].innerText
//     ); // Acces inner text positions via this and see where the value is stored.
//   }
// };

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
