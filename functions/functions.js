// //----------------------------------------------
// // FUNCTIONS

// // Define function - input (argument), code, output (return value)
// let greetUser = function () {
//     console.log("Welcome user!")
// }
// // Call function:
// greetUser()

// // Define function - Pass an argument in the function's parameter:
// let square = function(num){
//     let result = num*num
//     return result
// }
// // Call function and pass in an argument:
// let value = square(3)
// let otherValue = square(10)
// console.log(value)
// console.log(otherValue)

// // Challenge:
// let convertFtoC = function(fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5/9
//     return celsius
// }

// let freezing = convertFtoC(32)
// let boiling = convertFtoC(212)
// console.log("32*F freezing point of water is ",freezing, "*C")
// console.log("212*F boiling point of water is ",boiling, "*C")

// //----------------------------------------------
// // UNDEFINED & NULL
// let name //not assign a value to the var
// console.log(name) //--> undefined - the absence of a value for the var

// // Check undefined var:
// if (name === undefined){
//     console.log("Variable 'name' doesn't hold a value")
// } else{
//     console.log(name)
// }

// // Undefined for function arguments:
// let square = function (num) {
//     console.log(num)

// }
// square() //undefined- function call does not have an arg passed in
// let result = square()
// console.log(result) //function does not have a return statement

// // Null:
// let age = 27
// age = null
// console.log(age)
// //UNDEFINED - the program's default value when the var is not assigned
// //NULL - the developer's assigned value to a var

// //----------------------------------------------
// // FUNCTION MULTIPLE ARGUMENTS & ARGUMENT DEFAULTS

// // Multiple arguments:
// let add = function (a, b, c){ //comma separates multiple args
//     let result = a + b + c
//     return result
// }

// let result = add(12,3,-9)
// console.log(result)

// // Default arguments:
// let getScoreText = function (name = "N/A", score = 0){ // set default values. if there are no arguments provided, these assigned values will show up
//     return "Name: " + name + " - Score: " + score
// }

// let defaultValue = getScoreText() // no args provided
// let noArg = getScoreText("Uyen", 98)
// let oneArg = getScoreText(undefined, 100)
// console.log(defaultValue)
// console.log(noArg)
// console.log(oneArg)

// // Challenge:
// let getTip = function(total, tipPercent = 0.15){
//     tip = tipPercent*total
//     return tip
// }
// let tip20 = getTip(16.99,.20)
// let noTip = getTip(16.99, undefined) //by default, still tip 15%

// console.log(tip20)
// console.log(noTip)

//----------------------------------------------
// FUNCTION SCOPE

// Global scope (convertFtoC, freezing, boiling)
    // Local scope (fahrenheit, celsius)
let convertFtoC = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let freezing = convertFtoC(32)
let boiling = convertFtoC(212)
console.log("32*F freezing point of water is ",freezing, "*C")
console.log("212*F boiling point of water is ",boiling, "*C")
