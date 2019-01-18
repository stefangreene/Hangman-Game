// GLOBAL VARIABLES (accessible by all functions)
// ==================================================================================================
// Arrays.
var foodWordsList = ["pizza", "steak", "hamburger", "dumplings", "popcorn", "tacos",
  "stirfry", "sandwich", "enchalada", "nachos", "pretzels", "gelato"];
var movieWordsList = ["jumanji", "gladiator", "goodfellas", "psycho", "rocky", "titanic",
  "casablanca", "braveheart", "scarface", "shrek", "vertigo", "ratatouille"];
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
var solu__tions = [];     // Holds blank/solved letters (ex: 'n, _ _, n, _').
var wrongGuesses = [];      // Holds all of the wrong guesses.
var letterGuessed = "";   // Holds the letters guessed
var winCounter = 0;   // Game counter
var lossCounter = 0;    // Game counter
var numGuesses = 12;   // Game counter
var guessedLetters = [];


function setGameType(GameType){
chosenGameType = GameType;
chosenGameType = GameType[Math.floor(Math.random() * GameType.length)];
lettersInChosenGameType = chosenGameType.split("");
numBlanks = lettersInChosenGameType.length;
for (var i = 0; i < numBlanks; i++) {   // Fill up the solu__tions list with blanks.
  solu__tions.push("_");
  }
alert(chosenGameType);
startGame(GameType);
}
 function startGame(chosenGameType) {
  numGuesses = 12;
  // CRITICAL LINES
  solu__tions = [];    // *reset* solution array.
  wrongGuesses = [];          // *reset* wrong guesses.

  for (var i = 0; i < numBlanks; i++) {   // create blanks for chosen word.
    solu__tions.push("_");
  }
  //populate scoreboard with guesses, wrong guesses, solutions, and image.
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = solu__tions.join(" ");   
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" "); 
}

function checkLetters(letter) {   // see if any letters are in solution array.
  var letterInWord = false;   
    for (var i = 0; i < numBlanks; i++) { 
      if (chosenGameType[i] === letter) {
        letterInWord = true;   
       }
    }
    if (letterInWord) {   // If letter in the word, figure out exactly where and populate solution array (which indices).
        for (var j = 0; j < numBlanks; j++) { 
        if (chosenGameType[j] === letter) {   
          solu__tions[j] = letter;}
    }
  }

    else {
      wrongGuesses.push(letter); // Then we add the letter to the list of wrong letters.
      
      numGuesses--;   // We also subtract one of the guesses.
    } 
  }  

// roundComplete() function
function roundComplete() {    // Code to run after each guess.
// HTML UPDATES
  document.getElementById("guesses-left").innerHTML = numGuesses;   // Update the HTML to reflect the new number of guesses.
  document.getElementById("word-blanks").innerHTML = solu__tions.join(" ");    // This will print the array of guesses and blanks onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");     // This will print the wrong guesses onto the page.
   
if (lettersInChosenGameType.toString() === solu__tions.toString()) {   // If our string equals the solution.
    winCounter++;   // Add to the win counter
    alert("You win!");    // Give the user an alert
    document.getElementById("win-counter").innerHTML = winCounter;    // Update the win counter in the HTML
    setGameType(GameType);
    startGame(chosenGameType);    // Restart the game
  }
      if(numGuesses >= 12){
          $("#hanger").attr("src","assets/img12-face.jpg")
        }
      if(numGuesses == 11){
          $("#hanger").attr("src","assets/img11-eyes.jpg")
        }
      if(numGuesses == 10){
          $("#hanger").attr("src","assets/img10-nose.jpg")
        }
      if(numGuesses == 9){
          $("#hanger").attr("src","assets/img09-mouth.jpg")
        }
      if(numGuesses == 8){
          $("#hanger").attr("src","assets/img08-shoulder.jpg")
        }
      if(numGuesses == 7){
          $("#hanger").attr("src","assets/img07-armLeft.jpg")
        }
      if(numGuesses == 6){
          $("#hanger").attr("src","assets/img06-armRight.jpg")
        }
      if(numGuesses == 5){
          $("#hanger").attr("src","assets/img05-stomach.jpg")
        }
      if(numGuesses == 4){
          $("#hanger").attr("src","assets/img04-legLeft.jpg")
        }
      if(numGuesses == 3){
          $("#hanger").attr("src","assets/img03-legRight.jpg")
        }
      if(numGuesses == 2){
          $("#hanger").attr("src","assets/img02-footLeft.jpg")
        }
      if(numGuesses == 1){
          $("#hanger").attr("src","assets/img01-footRight.jpg")
        }
        
  else if (numGuesses === 0) {    // If we've run out of guesses
    lossCounter++;     // Add to the loss counter
    $("#hanger").attr("src","http://placehold.it/300x500")
    alert("HANGMAN!");    // Give the user an alert
    document.getElementById("loss-counter").innerHTML = lossCounter;
    setGameType(GameType);
    startGame(chosenGameType);    // Restart the game
    }
  }

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
startGame(chosenGameType);    // Starts the Game by running the startGame() function
document.onkeyup = function(event) {    // Then initiates the function for capturing key clicks.
letterGuessed = String.fromCharCode(event.which).toLowerCase();
var AlreadyGuessed=guessedLetters.indexOf(letterGuessed);
console.log(guessedLetters);
    if(AlreadyGuessed=='-1'){
      guessedLetters.push(letterGuessed);

// Converts all key clicks to lowercase letters.
checkLetters(letterGuessed); 
  

// defaults the game to end if there is no catergory or word selected.
if(chosenGameType!== "" && chosenGameType!==null){
  roundComplete();
}  } 
    // Runs the code that ends each round.
};
