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
// let pickWord = word[Math.floor(Math.random() * word.length)];
// Works for generating radom word from list!
function randomLength(word) {
    let randomWord = Math.floor(Math.random() * word.length);
    return word[randomWord].split('');
};
// console.log(randomLength(pickWord));
// Works to show amount of characters in word. Need to display blanks somehow.
// Need to write a function that turns the word into a string that can
// be compared to a guessed letter.
function numGuesses() {
    return 8

};

function render(wordz, wrongLetters) {
    let parent = document.querySelector('#guessesHere');
    let template = document.querySelector("#hangman-Template").innerHTML;
    parent.innerHTML = Mustache.render(template, {
        wordToGuess: wordz,
        graveyard: wrongLetters,
        lives: numGuesses() - wrongLetters.length
    });
}

window.addEventListener('load', function () {
    let wordToGuess = randomLength(word);
    console.log(wordToGuess);
    let wrongs = [];
    let rights = [];
    render(wordToGuess, wrongs);
    //Scott helped with this
    let checkIt = document.getElementById('checkBtn');
    console.log(checkIt);
    checkIt.addEventListener('click', function () {
        let guess = document.querySelector('#guess').value;
        if (wrongs.indexOf(inputValue) !== -1 || rights.indexOf(inputValue) !== -1) {
            console.log('nope!');
            document.querySelector('#guessBox').value = "";
            return
        }

        let check = false;
        for (let i = 0; i < wordToGuess.length; i++) {
            if (inputValue === wordToGuess[i]) {
                rights.push(inputValue);
                check = true;
                console.log('Correct!');
            }
        }
        if (check === false) {
            wrongs.push(inputValue);
            console.log('WRONG');
        }
        check = false;

        if (wrongs.length >= 8) {
            console.log('GAME OVER');
        }
        if (rights.length === wordToGuess.length) {
            console.log('WINNER');
        }

        render(wordToGuess, wrongs);
        let paragraph = document.querySelectorAll(".letter");

        for (let i = 0; i < wordToGuess.length; i++) {
            for (let j = 0; j < rights.length; j++) {
                if (rights[j] === wordToGuess[i]) {
                    paragraph[i].classList.remove('transparent');
                }
            }
        }
        document.querySelector("#guessBox").value = "";
    });
});