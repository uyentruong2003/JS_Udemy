// 1. Display the puzzle to the browser instead of the console
// 2. Display the guess left to the browser instead of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

const game1 = new Hangman('Cat',2)
// display puzzle
const puzzleEl = document.querySelector('#display-puzzle')
const guessesEl = document.querySelector('#display-guesses')

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.displayMessage()

// get the user input for guess letter
window.addEventListener('keypress', function (e) {
    const guess = e.key //get the key pressed
    game1.getGuess(guess)
    // print on screen the puzzle and remaining guesses
    const puzzle = game1.getPuzzle()
    puzzleEl.textContent = puzzle
    guessesEl.textContent = game1.displayMessage()
    
})
