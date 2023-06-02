const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelector('button')
let userChoice
let computerChoice

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
//     userChoice = e.target.id
//     userChoiceDisplay.innerText = userChoice
    generateComputerChoice()
// }))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    // console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = 'rock'
    }

    if(randomNumber === 2){
        computerChoice = 'scissors'
    }

    if(randomNumber === 3){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}