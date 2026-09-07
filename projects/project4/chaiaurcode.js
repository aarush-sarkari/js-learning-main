let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let previousGuess = []

let numGuess = 1

let playgame = true ;
if(playgame){
        submit.addEventListener('click', function(e){
           e.preventDefault();
           const guess = parseInt(userinput.value);
           console.log(guess);
           validateGuess(guess);
        });
    }

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('1 se neechey ku daal rha bacchi')
    }else if(guess>100){
        alert('please enter a valid number between 1 to 100')
    }else{
        previousGuess.push(guess)
}if(numGuess===11){
    displayGuess(guess)
    displayMessage(`game over. Random number was ${randomNumber}`)
    endGame()
}else{
    displayGuess(guess)
    checkGuess(guess)
}
}

 function checkGuess(guess){
    if(guess===randomNumber){
   displayMessage(`you guessed it right`)
   endGame()}
 else if(guess<randomNumber) {
 displayMessage('value is too low')
}else if(guess>randomNumber) {
 displayMessage('value is too high')
}
}
function displayGuess(guess){
    userinput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++ ;
    remaining.innerHTML = `${11-numGuess}`

}
function displayMessage (message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
userinput.value = ''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame">start new game</h2>`
startOver.appendChild(p);
playgame =false ;
newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
randomNumber = parseInt(Math.random()*100+1);
previousGuess = []
numGuess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `${11-numGuess}`
userinput.removeAttribute('disabled')
startOver.removeChild(p)
playgame =true
})
}