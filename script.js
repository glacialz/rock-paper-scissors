const getComputerMove = () => {
    randomNum = Math.floor(Math.random() * 3);
    move = (randomNum === 0) ? 'rock' : 
        (randomNum === 1) ? 'paper' : 'scissors';
    return move;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win'
    } else {
        return 'lose'
    }
}

const isValidMove = (move) => {
    if (move === 'rock' || move === 'paper' || move === 'scissors') {
        return true;
    }
    return false
}

const getPlayerMove = () => {
    let move = prompt('Choose: Rock, Paper, or Scissors').toLowerCase();

    while (!isValidMove(move)) {
        move = prompt('Invalid Move!\nChoose: Rock, Paper, or Scissors').toLowerCase();
    }
    return move;
}

const game = () => {
    for(let i = 0; i < 5; i++) {
        playerSelection = getPlayerMove();
        computerSelection = getComputerMove();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();