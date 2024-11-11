document.addEventListener('DOMContentLoaded', () => {
    const choices = ['stone', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('button');
    const resultDiv = document.getElementById('result');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = determineWinner(playerChoice, computerChoice);
            resultDiv.textContent = `You chose ${playerChoice}. The computer chose ${computerChoice}. ${result}`;
        });
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === 'stone' && computer === 'scissors') ||
            (player === 'paper' && computer === 'stone') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
});
