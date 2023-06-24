// 1. Display the puzzle to the browser instead of the console
// 2. Display the guess left to the browser instead of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

const game1 = new Hangman('New Jersey',2)
// display puzzle
const puzzleEl = document.querySelector('#display-puzzle')
const guessesEl = document.querySelector('#display-guesses')

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.message

// get the user input for guess letter
window.addEventListener('keypress', (e) => {
    const guess = e.key //get the key pressed
    game1.makeGuess(guess)
    // print on screen the puzzle and remaining guesses
    const puzzle = game1.puzzle
    puzzleEl.textContent = puzzle
    guessesEl.textContent = game1.message
    
})
// ----------------------------------------------
// CALLBACK FUNCTION
getPuzzle((error,puzzle)=>{
    if (error){
        console.log(`Error: ${error}`)
    } else{
        console.log(puzzle)
    }
})