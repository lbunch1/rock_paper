//declare scores, player selection and robot selection
let playerScore = 0;
let robotScore = 0;
let gameResult
let roundResult
let playerChoice
let robotChoice


//create robot selection
function robotSelection() {
    robotChoice = Math.floor(Math.random() * 3);
    console.log(robotChoice);   
}
//convert choice id to string
function numToSelection(int) {
    switch(int) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

//add to score based on round result
function addPoint(round) {
    switch(round) {
        case 1:
            playerScore = playerScore + 1;
            break;
        case 0:
            robotScore = robotScore + 1;
            break;
        case 2:
            playerScore = playerScore + 1;
            robotScore = robotScore + 1;
    };
}
//compare selection and establish winner
function getRoundWinner(pChoice, rChoice) {
    if (pChoice === rChoice) {
        roundResult = 2
    } else if (pChoice === 0 && rChoice === 2 || pChoice === 1 && rChoice === 0 || pChoice === 2 && rChoice === 1) {
            roundResult = 1;
    } else {
            roundResult = 0;
    }
}

//take player selection
function getPlayerChoice(choice) {
    playerChoice = choice;
    robotSelection();
    document.getElementById("playerSelection").innerHTML = numToSelection(playerChoice);
    document.getElementById("robotSelection").innerHTML = numToSelection(robotChoice);
    getRoundWinner(playerChoice, robotChoice);
    addPoint(roundResult);
    console.log(roundResult);
    console.log(playerScore + " " + robotScore);
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("robotScore").innerHTML = robotScore;
    gameOver();
}

//declare win or loss win score reaches 5
function gameOver() {
    const messageWin = "You Win!!!";
    const messageLose = "You Lose.";
    const messageTie = "Tie Game";
    if (playerScore == 5 && robotScore < 5) {
        document.getElementById("game_status").innerHTML = messageWin;
        document.getElementById("game_over").style.display = "flex";
        console.log("you win");
    } else if (robotScore == 5 && playerScore < 5) {
        document.getElementById("game_status").innerHTML = messageLose;
        document.getElementById("game_over").style.display = "flex";
        console.log("you lose");
    } else if (playerScore == 5 && robotScore == 5) {
        document.getElementById("game_status").innerHTML = messageTie;
        document.getElementById("game_over").style.display = "flex";
        console.log("tie game");
    } else {
        return;
    };
}


//refresh page and start over
function restartGame() {
    location.reload();
}
