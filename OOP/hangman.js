const Hangman = function (word, remainingGuesses, guessedLetters = []) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
}

// 1. Set up the word instance property as an array of lowercase letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

Hangman.prototype.getPuzzle = function (){
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)){
            puzzle += letter
        } else {
            if (letter != ' '){
                puzzle += '*'
            } else {
                puzzle += ' '
            }
        }
    })
    return puzzle
}

// Create a method for making a guess
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

Hangman.prototype.getGuess = function (guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    // if the letter wasn't guessed before, push it to the array
    if (isUnique) {
        this.guessedLetters.push(guess)
        if (isBadGuess){
            // decrement the remaining guesses:
            this.remainingGuesses --
        }
    }
}

const game1 = new Hangman('Cat', 2, [])
game1.getGuess('t')
game1.getGuess('d')
console.log(game1.guessedLetters)
console.log(game1.remainingGuesses)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4, ['e'])
console.log(game2.getPuzzle())