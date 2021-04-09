const getComputerMove = () => {
    randomNum = Math.floor(Math.random() * 3);
    move = ['rock', 'paper', 'scissors'];
    return move [randomNum];
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

function getVictor(score) {
    if (score['win'] === score['lose']) {
        return 'It\'s a tie!';
    } else if (score['win'] > score['lose']) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function setScore(result) {
    score[result] += 1;
}

function updatePage(result, score) {
    const resultDom = document.querySelector('.result');
    const scoreDom = document.querySelector('.score');
    resultDom.textContent = `${result}`;
    console.log(score)
    scoreDom.textContent = `wins: ${score['win']}, ties: ${score['tie']}, loses: ${score['lose']}`
    if (round >= 4) {
        const victorDom = document.querySelector('.victor');
        victorDom.textContent = getVictor(score);
    }
}

function game(playerSelection) {
    if (round < 5) {
        playerSelection = playerSelection;
        computerSelection = getComputerMove();
        result = playRound(playerSelection, computerSelection)
        setScore(result);
        updatePage(result, score, round);
        round++;
    }
}

const choices = document.querySelectorAll('.move');
choices.forEach((move) => {
    move.addEventListener('click', () => {
        game(move.value);
    })
});

let score = { 'win': 0, 'tie': 0, 'lose': 0 }
let round = 0;