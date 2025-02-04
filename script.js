let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let ranIndex = Math.floor(Math.random() * 3)
  // console.log(Math.floor(Math.random() * 1));
  return options[ranIndex];
};

const drawGame = () => {
  console.log("Game Draw");
  msg.innerText = "game was draw. Play again 😂🤣";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win");
    msg.innerText = `you win 😊 your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You lose");
    msg.innerText = `you lose 🥹 ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  //Generate Computer Choice
  const compChoice = getComputerChoice();
  console.log("computer choice", compChoice);

  if (userChoice == compChoice) {
    //draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {

  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was clciked" , "#" + userChoice);
    playGame(userChoice);
  })
});