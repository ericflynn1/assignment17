// 1.  Create an array of words
// 2.  Pick a random word to display
// 3.  Display Number of blanks 
// 4.  Display guessed letters
// 5.  Return number of guesses remaining.
// 6.  Create text box with 'guess' button
// 7.  'guess' button compares entered letters against ones in the word.
// 8.  findLetter - returns the indexes where the specified letter 
//     occurs in the specified word 
// 9.  reveal - doesn't return a value, but reveals 
//     (in the DOM) the specified letters in the specified word
// 10. Write function: wins - returns true if the player has won or 
//    false if they haven't yet. Pass whatever you want to as a parameter. 
// 11. Write function: loses - returns true if the player has lost or 
//     false if they haven't yet. Pass whatever you want to as a parameter.

let word = ['bat', 'cook', 'follow', 'guitar', 'bank', 'shallow', 'helicopter'];
// http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
let random = word[Math.floor(Math.random() * word.length)];
// Works for generating radom word from list!
