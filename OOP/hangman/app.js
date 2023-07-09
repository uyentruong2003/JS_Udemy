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
// // CALLBACK FUNCTION: pass this function into the function getPuzzle in requests.js
getPuzzle("2",(error,puzzle)=>{
    if (error){
        console.log(`Error: ${error}`)
    } else{
        console.log(puzzle)
    }
})

// // ----------------------------------------------
// // ASYNCHRONOUS VS. SYNCHRONOUS EXECUTION
// // Asynchronous: the next steps will still be executed even though the request hasn't been done processing
// // Synchronous: the next, unrelated steps will not be executed until the request is done
// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('Do sth Else')

// ----------------------------------------------
// PROMISE
getPuzzlePromise('2').then((puzzle) => {
    console.log(puzzle)
}, (error) =>{
    console.log(error)
})

// ----------------------------------------------
// FETCH API
fetchPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})

// ----------------------------------------------
// ASYNC-AWAIT
asyncAwaitPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})