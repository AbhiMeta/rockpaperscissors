/*
0 - rock 
1 - paper 
2 - scissors
*/

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "You Tie!"
    }

    if(playerSelection === 0) {
        if(computerSelection === 2) {
            return win(playerSelection, computerSelection)
        }
        else {
            return lose(playerSelection, computerSelection)
        }
    }

    if(playerSelection === 1) {
        if(computerSelection === 0) {
            return win(playerSelection,computerSelection)
        }
        else {
            return lose(playerSelection,computerSelection)
        }
    }

    if(playerSelection === 2) {
        if(computerSelection === 1) {
            return win(playerSelection,computerSelection)
        }
        else {
            return lose(playerSelection,computerSelection)
        }
    }
}

function convert(x) {
    if(x === 0) {
        return "Rock"
    }
    if(x === 1) {
        return "Paper"
    }
    if(x === 2) {
        return "Scissors"
    }
}

function win(x, y) {
    return "You Win! " + convert(x) +" beats " + convert(y) 
}

function lose(x, y) {
    return "You Lose! " + convert(y) + " beats " + convert(x) 
}

function game() {
    for(let i = 0; i < 5; i++) {
        
    }
}
