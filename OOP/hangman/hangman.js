const Hangman = function (word, remainingGuesses, guessedLetters = []) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
    this.status = "playing"
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
    this.setStatus()
}

// 1. Setup new "status" property with initial value of "playing"
// 2. Create method for recalculating status to "playing", "finished", or "failed"
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status

Hangman.prototype.setStatus = function (){
    let finished = false
    this.word.every(function (letter){
        return this.
    })
    if (this.remainingGuesses <= 0){
        this.status = "failed"
    } else if (finished) {
        this.status = "finished"
    } else {
        this.status = "playing"
    }
}