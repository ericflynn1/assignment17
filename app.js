// 1.  Create an array of words
// 2.  Pick a random word to display
// 3.  Display Number of blanks (design)
// 4.  Display guessed letters (design)
// 5.  Return number of guesses remaining.
// 6.  Create text box with 'guess' button (design)
// 7.  'guess' button compares entered letters against ones in the word.
// 8.  findLetter - returns the indexes where the specified letter 
//     occurs in the specified word 
// 9.  reveal - doesn't return a value, but reveals 
//     (in the DOM) the specified letters in the specified word (design)
// 10. Write function: wins - returns true if the player has won or 
//    false if they haven't yet. Pass whatever you want to as a parameter. 
// 11. Write function: loses - returns true if the player has lost or 
//     false if they haven't yet. Pass whatever you want to as a parameter.

let word = ['bat', 'cook', 'follow', 'guitar', 'bank', 'shallow', 'helicopter'];
// http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
let pickWord = word[Math.floor(Math.random() * word.length)];
// Works for generating radom word from list!
function randomLength(pickWord) {
    return pickWord.length
};
// console.log(randomLength(pickWord));
// Works to show amount of characters in word. Need to display blanks somehow.
// Need to write a function that turns the word into a string that can
// be compared to a guessed letter.
function stringy(pickWord) {
    let strings = pickWord.stringify
};
function numGuesses() {
    let guesses = 0;
    if (guesses > 9) {
        
    }
};
// Not sure how to proceed/ write any of the remaining functions.
// Moving onto simpler design aspects.

document.getElementById('checkBtn').onclick = function (){
        // '.onclick of null' error for the button?
    let guess = document.getElementById('guess').value;
    let guessesLeft = 9;
    checkGuess(guess);
    counter++;

    if(counter === maxGuesses) {
        alert("Game Over");
    }
};
// I know we don't use 'alert' but I forgot how to print it onto the DOM.
function checkGuess(guess) {
    if (guessInput.value === strings){
        answerDisplay.innerHTML = "Correct!";
    } else if (guessInput !== strings) {
        answerDisplay.innerHTML = "Incorrect";
        guessesLeft -= 1;
    }
}
