function userChoice(userSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    const result = determineWinner(userSelection, computerSelection);

    displayResult(result, userSelection, computerSelection);
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'It\'s a tie!';
    }

    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

function displayResult(result, user, computer) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `${result} You chose ${user}. Computer chose ${computer}.`;
}
