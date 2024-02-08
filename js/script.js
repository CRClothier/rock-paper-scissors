let userChoice = prompt("Enter 'rock' 'paper' or 'scissors'")

function computerChoice() {
  let options = ['paper', 'scissors', 'rock'];
  return options[Math.floor(Math.random() * options.length)]
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Draw';
} else if (userChoice === 'rock' && computerChoice === 'scissors') {
  return 'User Wins';
} else if (userChoice === 'paper' && computerChoice === 'rock') {
  return 'User wins';
} else if (userChoice === 'scissors' && computerChoice === 'paper') {
  return 'User wins';
} else { 
    return 'computer wins';
}};

function showInput() {
  document.getElementById("result").innerHTML = playRound(userChoice, computerChoice());
}

showInput();