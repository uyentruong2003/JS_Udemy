// ----------------------------------------------
// TERNARY (CONDITIONAL) OPERATORS
// Alternative syntax for if-else statement in some cases
const myAge = 27
let message

message = myAge >=18 ? "You can vote" : "You cannot vote"
console.log(message)

const showPage = () => {
    console.log('Showing the page')
}
const showErrorPage = () => {
    console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

// Challenge:
const team = ['Frank', 'Katy']

const showTeamSize = (size) =>{
    console.log(`Team size: ${size}`)
}

const showMessage = () =>{
    console.log("Too many people on your team")
}

team.length <= 4 ? showTeamSize(team.length) : showMessage()

// Shorter way:
console.log(team.length <= 4 ? `Team size: ${team.length}` : "Too many people on your team")
