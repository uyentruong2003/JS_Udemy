// ----------------------------------------------
// ARROW FUNCTIONS
// Original way for function declaration
const squareFull = function (num) {
    return num*num
}
// Alternative way for function declaration
const squareLong = (num)  => {
    return num*num
}

// Shorthand syntax
const squareShort = (num) => num*num

console.log(squareShort(5))

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'John',
    age: 22
},{
    name: 'Jane',
    age: 33
}]

// Original:
const under30Full = people.filter(function (person){
    return (person.age < 30)
})

console.log(under30Full)

// Shortened:
const under30Short = people.filter((person) => person.age <30)
console.log(under30Short)

//  Challenge:
const is22 = people.find((person) => person.age === 22)
console.log(is22.name)

const add = function (a,b){ //declare only 2 args
    console.log(arguments)
}

add (11,22,33,44) //pass in 4 args but still OK

const car = {
    color: 'Red',
    getSummary: function () { //arrpw function can't work for obj's method
        return `The car's color is ${this.color}`
    },
    // another workable syntax
    getSummary2() {
        return `The car's color is ${this.color}`
    }
}

console.log(car.getSummary())
console.log(car.getSummary2())

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


const products = [{name: 'Computer mouse'}]
const product = products[0]

// ----------------------------------------------
// FALSY & TRUTHY VALUES
// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN (Not a Number)
// Truthy values - true, numbers other than 0, string, etc.
if (product) { //instead of if (product !== undefined)
    console.log('Product found')
} else {
    console.log('Product not found')
}

// ----------------------------------------------
// THROWING & CATCHING ERRORS:
const getTip = (amount) => {
    if (typeof amount === 'number'){
        return amount *.25
    } else { //if not a number, throw an error message
        throw Error('Argument must be a number')
    }
}

// Use try-catch to run alternative codes when an error occurs 
try {
    const result = getTip(true)
    console.log(result)
}catch(e) { //if try has error, do catch
    console.log('catch block is running')
}

// Challenge:
const gradeCalc = (score, totalScore) =>{
    if (typeof score === 'number' && typeof totalScore === 'number') {
        const percent = (score/totalScore)*100
        let letterGrade = ''
        if (percent >= 90) {letterGrade = 'A'}
        else if (percent >= 80) {letterGrade = 'B'}
        else if (percent >= 70) {letterGrade = 'C'}
        else if (percent >= 60) {letterGrade = 'D'}
        else {letterGrade = 'F'}
        return `Your grade: ${letterGrade}`
    } else {
        throw "Scores must be number"
    }
}

try {
    const grade = gradeCalc(98, 100)
    console.log(grade)
} catch (e){
    console.log('Please re-enter a different number and retry')
}

// ----------------------------------------------
// TYPE COERCION

// Type coercion: if we conduct operations between variables of different types,
    //JS will automatically try it best to guess and coerce the operation into one type

    console.log('5'+5) //print 55- JS opts the string context
    console.log('5'-5) //print 0- JS opts the number context
    // Type Coercion - a string, a number, or a boolean (truthy/falsy); 
        // type coercion for string and number is inconsistent and not reccommended
    console.log(5=='5') //print true even tho it's different type
    console.log(5==='5')// print false
    console.log(true + 12) //print 13
    //check type of a variable:
    console.log(typeof 123)