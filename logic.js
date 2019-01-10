// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================
// Arrays.
var foodWordsList = ["pizza", "steak", "hamburger", "dumplings", "popcorn", "tacos",
  "stirfry", "sandwich", "enchalada", "nachos", "pretzels", "gelato"];
var movieWordsList = ["Jumanji", "Gladiator", "Goodfellas", "Psycho", "Rocky", "Titanic",
  "Casablanca", "Braveheart", "Scarface", "Shrek", "Vertigo", "Ratatouille"];
var candyWordsList = ["snickers", "skittles", "starbursts", "rolos", "twizzlers", "runts",
  "whoppers", "mamba", "reeses", "raisenets", "butterfinger", "airheads"];
var carWordsList = ["volvo", "ford", "tesla", "volkswagen", "toyota", "hummer",
  "nissan", "porsche", "ferrari", "lamborghini", "chrysler", "maserati"];
var stateWordsList = ["montana", "idaho", "california", "texas", "virginia", "massachusetts",
  "mississippi", "florida", "alaska", "washington", "vermont", "kentucky"];

// categorie selection setgametype function.
var chosenGameType = "";
var GameType = "";
var lettersInChosenGameType = [];   // Break individual letters to be stored in array.
var numBlanks = 0;    // number of blanks.
var blanksAndSuccesses = [];     // Holds blank/solved letters (ex: 'n, _ _, n, _').
var wrongGuesses = [];      // Holds all of the wrong guesses.
var letterGuessed = "";   // Holds the letters guessed
var winCounter = 0;   // Game counter
var lossCounter = 0;    // Game counter
var numGuesses = 12;   // Game counter


function chosenGameType(GameType){
chosenGameType = GameType;
chosenGameType = GameType[Math.floor(Math.random() * GameType.length)];
lettersInChosenGameType = chosenGameType.split("");
numBlanks = lettersInChosenGameType.length;
alert(chosenGameType);
}
chosenGameType(GameType);
// startGame()
  function startGame(chosenGameType) {
  numGuesses = 12;
  //chosenGameType = GameType[Math.floor(Math.random() * GameType.length)];
  //lettersInChosenGameType = chosenGameType.split("");    // The word is broken into individual letters.
  //numBlanks = lettersInChosenGameType.length;      // We count the number of letters in the word.
  //console.log(chosenGameType);    // We print the solution in console (for testing).

  // CRITICAL LINES
  blanksAndSuccesses = [];    // *reset* the guess and success array at each round.
  wrongGuesses = [];          // *reset* the wrong guesses from the previous round.

  for (var i = 0; i < numBlanks; i++) {   // Fill up the blanksAndSuccesses list with blanks.
    blanksAndSuccesses.push("_");
  }
  console.log(blanksAndSuccesses);    // Print the initial blanks in console.
  document.getElementById("guesses-left").innerHTML = numGuesses;   // Reprints the guessesLeft to 9.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");    // Prints the blanks at the beginning of each round in the HTML.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");     // Clears the wrong guesses from the previous round.
}

function checkLetters(letter) {   // It's where we will do all of the comparisons for matches. Set not called!!
  var letterInWord = false;   // This boolean will be toggled if a user letter is found anywhere in the word.
    for (var i = 0; i < numBlanks; i++) {   // Check if a letter exists inside the array at all.
      if (chosenGameType[i] === letter) {
        letterInWord = true;     // If the letter exists toggle this boolean to true. This will be used in the next step.
       }
    }
      if (letterInWord) {   // If letter in the word, figure out exactly where (which indices).
        for (var j = 0; j < numBlanks; j++) {     // Loop through the word
          if (chosenGameType[j] === letter) {   // Populate the blanksAndSuccesses with every instance of the letter.
            blanksAndSuccesses[j] = letter;   // Set blank spaces to the correct letter when there is a match.
          }
      }
    console.log(blanksAndSuccesses);    // Log the current blanks and successes for testing.
  }
    else {
        wrongGuesses.push(letter);    // Then we add the letter to the list of wrong letters.
        numGuesses--;   // We also subtract one of the guesses.
    }
        if(numGuesses == 12){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 11){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 10){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 9){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 8){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 7){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 6){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 5){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 4){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 3){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 2){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 1){
          $("img").attr("src","https://placehold.it/400x550")
        }
        if(numGuesses == 0){
          $("img").attr("src","https://placehold.it/400x550")
        }
}
// roundComplete() function
function roundComplete() {    // Code to run after each guess.
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);   // log initial status update. report wins,losses,and guesses.
// HTML UPDATES
  document.getElementById("guesses-left").innerHTML = numGuesses;   // Update the HTML to reflect the new number of guesses.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");    // This will print the array of guesses and blanks onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");     // This will print the wrong guesses onto the page.

  if (lettersInChosenGameType.toString() === blanksAndSuccesses.toString()) {   // If our string equals the solution.
    winCounter++;   // Add to the win counter
    alert("You win!");    // Give the user an alert
    document.getElementById("win-counter").innerHTML = winCounter;    // Update the win counter in the HTML
    startGame(chosenGameType);    // Restart the game
  }
  else if (numGuesses === 0) {    // If we've run out of guesses
    lossCounter++;     // Add to the loss counter
    alert("You lose");    // Give the user an alert
    document.getElementById("loss-counter").innerHTML = lossCounter;     // Update the loss counter in the HTML
    startGame(chosenGameType);    // Restart the game
  }
}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
startGame(chosenGameType);    // Starts the Game by running the startGame() function
document.onkeyup = function(event) {    // Then initiates the function for capturing key clicks.
letterGuessed = String.fromCharCode(event.which).toLowerCase();   // Converts all key clicks to lowercase letters.
checkLetters(letterGuessed);    // Runs the code to check for correct guesses.
roundComplete();    // Runs the code that ends each round.
};