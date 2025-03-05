const choices = ["가위", "바위", "보"];
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "무승부";
  }
  if (
    (playerChoice === "가위" && computerChoice === "보") ||
    (playerChoice === "바위" && computerChoice === "가위") ||
    (playerChoice === "보" && computerChoice === "바위")
  ) {
    playerScore++;
    return "플레이어 승리";
  } else {
    computerScore++;
    return "컴퓨터 승리";
  }
}

function playGame(playerChoice) {
  if (roundsPlayed >= 10) {
    document.getElementById("game-start").textContent = "";
    document.getElementById("result").textContent =
      "게임 종료. 새로고침해주세요!";
    return;
  }

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  document.getElementById("game-count").textContent -= 1;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  document.getElementById("game-start").textContent = `
    플레이어: ${playerChoice} vs 컴퓨터: ${computerChoice} 
  `;
  document.getElementById("result").textContent = ` ${result}`;

  roundsPlayed++;

  if (roundsPlayed === 10) {
    if (playerScore > computerScore) {
      document.getElementById("result").textContent = "최종 결과: 당신의 승리!";
    } else if (playerScore < computerScore) {
      document.getElementById("result").textContent = "최종 결과: 컴퓨터 승리!";
    } else {
      document.getElementById("result").textContent = "최종 결과: 무승부!";
    }
  }
}
