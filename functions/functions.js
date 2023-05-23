//----------------------------------------------
// FUNCTIONS

// Define function - input (argument), code, output (return value)
let greetUser = function () {
    console.log("Welcome user!")
}
// Call function:
greetUser()

// Define function - Pass an argument in the function's parameter:
let square = function(num){
    let result = num*num
    return result
}
// Call function and pass in an argument:
let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge:
let convertFtoC = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    return celsius
}

let freezing = convertFtoC(32)
let boiling = convertFtoC(212)
console.log("32*F freezing point of water is ",freezing, "*C")
console.log("212*F boiling point of water is ",boiling, "*C")
