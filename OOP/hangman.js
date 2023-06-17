const Hangman = function (word, remainingGuesses, guessedLetters = []) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = guessedLetters
}

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

// 1. Set up the word instance property as an array of lowercase letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back

const game1 = new Hangman('Cat', 2, ['k','a','t','m'])
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4, ['n','o','e', 'y'])
console.log(game2.getPuzzle())