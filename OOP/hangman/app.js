// 1. Display the puzzle to the browser instead of the console
// 2. Display the guess left to the browser instead of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

// display puzzle
const puzzleEl = document.querySelector('#display-puzzle')
const guessesEl = document.querySelector('#display-guesses')
let game1

// get the user input for guess letter
window.addEventListener('keypress', (e) => {
    const guess = e.key //get the key pressed
    game1.makeGuess(guess)
    // print on screen the puzzle and remaining guesses
    render()  
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.message
}

// start game:
const startGame = async () => {
    const puzzle = await getPuzzleAsync('2')
    console.log(puzzle)
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()

// //----------------------------------------------
// // CALLBACK FUNCTION: pass this function into the function getPuzzle in requests.js
// getPuzzle("2",(error,puzzle)=>{
//     if (error){
//         console.log(`Error: ${error}`)
//     } else{
//         console.log(puzzle)
//     }
// })

// // ----------------------------------------------
// // ASYNCHRONOUS VS. SYNCHRONOUS EXECUTION
// // Asynchronous: the next steps will still be executed even though the request hasn't been done processing
// // Synchronous: the next, unrelated steps will not be executed until the request is done
// const puzzle = getPuzzleSync()
// console.log(puzzle)
// console.log('Do sth Else')

// // ----------------------------------------------
// // PROMISE
// getPuzzlePromise('2').then((puzzle) => {
//     console.log(puzzle)
// }, (error) =>{
//     console.log(error)
// })

// // ----------------------------------------------
// // FETCH API
// fetchPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// // ----------------------------------------------
// // ASYNC-AWAIT
// getPuzzleAsync('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(error)
// })

