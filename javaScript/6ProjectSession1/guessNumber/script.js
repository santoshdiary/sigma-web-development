let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses"); //  privious guesses
const remaing = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi"); // for input num less or greater than random number

const startOver = document.querySelector(".resultParas"); //for resting when all attempts over

const p=document.createElement('p'); // creating a p element for print message of new game 

let prevGuess = []; //array of previous
let numGuss = 1;
let playGame = true; // entry of any game

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);

    validateGuess(guess);
  });
}
function validateGuess(guess) {
  // validate input
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number more than 1 ')
  }
  else if(guess>100){
     alert('Please enter a number less than 100 ')
  }else{
    prevGuess.push(guess)
    if(numGuss===11){
    cleanup(guess);
    displayMessage(`Game is Over. Random was Number: ${randomNumber}`)
    endGame();
    }
    else{
        cleanup(guess)
        checkGuess(guess)
    }
  }
}
function checkGuess(guess) {
    if(guess===randomNumber){
        displayMessage(`You guessed it right `)
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Numebr is too high`)
    }
}
function cleanup(guess) {
    userInput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuss++;
    remaing.innerHTML=`${11-numGuss}`;
}

function displayMessage(message) {
lowOrHigh.innerHTML=`<h2>${message}</h2>`
}

function endGame() {
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button'); // adding a button in p tag 
    p.innerHTML=`<h3 id="newGame"> Start New Game </h3>`
   startOver.appendChild(p) // appending the p into result parse section 
    playGame=false;
    newGame()
}
function newGame() {
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        numGuss=1;
        guessSlot.innerHTML='';
       remaing.innerHTML=`${11-numGuss}`;
       userInput.removeAttribute('disabled');
       startOver.removeChild(p)

       playGame=true
    })
}
