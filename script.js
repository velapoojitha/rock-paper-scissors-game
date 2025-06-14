let playerScore = 0;
let computerScore = 0;
let movesLeft = 10;

function playGame(playerChoice) {
    if (movesLeft === 0) {
        document.getElementById("result").innerText = "🎮 Game Over!";
        return;
    }

    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = "";

    if (playerChoice === computerChoice) {
        resultMessage = "🤝 It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = "✅ You Win!";
        playerScore++;
    } else {
        resultMessage = "❌ You Lose!";
        computerScore++;
    }

    movesLeft--;

    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("moves-left").innerText = movesLeft;
    document.getElementById("result").innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${resultMessage}`;
}

function restartRPS() {
    playerScore = 0;
    computerScore = 0;
    movesLeft = 10;
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("moves-left").innerText = movesLeft;
    document.getElementById("result").innerText = "";
}

