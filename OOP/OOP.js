// //----------------------------------------------
// // OBJECT BASICS
// // Using 'let obj_name = {}' to initialize an object  
// let myBook = {
//     title: "financial feminists", //class var
//     author: "Tori Dunlap",
//     pageCount: 300
// }
// console.log(myBook) //output all the attributes
// console.log(`${myBook.title} by ${myBook.author}`) // only output the mentioned attributes
// myBook.title = "Animal Farm"
// myBook.author = "George Orwell"
// console.log(`${myBook.title} by ${myBook.author}`)

// // Challenge:
// // Model a person with attributes: name, age, location
// let person = {
//     name: "Uyen",
//     year: 2023,
//     age: 20,
//     location: "Vietnam"
// }
// console.log(`In ${person.year}, ${person.name} is ${person.age} and from ${person.location}`)
// // Add one year to age & year:
// person.age = person.age + 1
// person.year = person.year + 1
// console.log(`In ${person.year}, ${person.name} is ${person.age} and from ${person.location}`)

// //----------------------------------------------
// // FUNCTION & OOP

// // Obj: myBook
// let myBook = {
//     title: "Financial Feminists",
//     author: "Tori Dunlap", //don't forget the comma
//     pageCount: 300
// } 

// // Obj: otherBook
// let otherBook = {
//     title: "Animal Farm",
//     author: "George Orwell",
//     pageCount: 200
// }

// // Function: print out title, author, pages
// let getSummary = function(book){
//     console.log(`${book.title} by ${book.author} has ${book.pageCount} pages.`)
// }

// getSummary(myBook)
// getSummary(otherBook)

// // Using obj in a function to return multiple values separately
// let getSummaryObj = function(book){
//     return {
//         summary: `${book.title} is written by ${book.author}`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long`
//     }
// }

// let myBookSummaryObj = getSummaryObj(myBook) //initialize a getSummary2 obj
// let otherBookSummaryObj = getSummaryObj(otherBook)
// console.log(myBookSummaryObj.summary) //just print out the summary for myBook
// console.log(otherBookSummaryObj.pageCountSummary) //just print out the pageCount summary for otherBook

// // Challenge:

// let convertFahrenheit = function(fahrenheit){
//     return {
//         fahrenheit: `Temperature in Fahrenheit: ${fahrenheit}*F`,
//         celsius: `Convert to Celsius: ${(fahrenheit - 32) * (5/9)}*C`,
//         kelvin: `Convert to Kelvin: ${(fahrenheit + 459.67)* (5/9)}*K`
//     }
// }

// let tempSummary = convertFahrenheit(32)
// console.log(tempSummary.fahrenheit)
// console.log(tempSummary.celsius)

// //----------------------------------------------
// // OBJECT REFERENCE
// let myAcc = {
//     name: "Uyen Truong",
//     expenses: 0,
//     income: 0
// }

// let otherAcc = myAcc
// otherAcc.income = 1000 //refer to the same myAcc & change the income of myAcc to 1000

// let addExpense = function(account, amount) {
//     account.expenses = account.expenses + amount
//     console.log(account)
// }

// addExpense(myAcc, 2.50)
// console.log(myAcc) // the expenses will be changed to 2.5

// addExpense(myAcc, 2.50)
// console.log(myAcc) // the expenses will be changed to 5

// // Challenge:
// // Build an Expense Tracker:

// let myAccount = {
//     name: "Uyen Truong",
//     income: 0,
//     expense: 0
// }

// // addIncome
// let addIncome = function(account, amount){
//     account.income += amount
// }
// // addExpense
// let addExpense = function(account, amount){
//     account.expense += amount
// }
// // resetAccount (reset income & expenses to 0)
// let resetAccount = function (account){
//     account.income = 0
//     account.expense = 0
// }
// // getAccountSummary
// let getAccountSummary = function(account){
//     console.log(`Here's a summary of ${account.name}'s account: `)
//     balance = account.income - account.expense
//     return {
//         income: `${account.name}'s Income: $${account.income}`,
//         expense: `${account.name}'s Expense: $${account.expense}`,  
//         balance: `${account.name}'s Account Balance: $${balance}`
//     }
// }


// addIncome(myAccount, 1000)
// addExpense(myAccount, 20)
// let summary = getAccountSummary(myAccount) // create an obj summary & call function getAccountSummary
// console.log(summary)// print out all income, expense, and balance

// // print income & expense separately:
// console.log(`Just print out income:\n${summary.income}`)
// console.log(`Just print out expense:\n${summary.expense}`)
// console.log(`Just print out balance:\n${summary.balance}`)

// resetAccount(myAccount)
// console.log(myAccount)


// //----------------------------------------------
// // METHOD BASICS:
// let restaurant = {
//     name: "ASB",
//     guestCap: 75,
//     guestCount: 0,
//     // Method- an object's function
//     checkAvailability: function (partySize) {
//         let seatsLeft = this.guestCap - this.guestCount //'this' is referring to the current object
//         return partySize <= seatsLeft //if the partySize is < or = seatsLeft, return true
//     },
//     // add party to guestCount
//     seatParty: function (partySize) {
//         this.guestCount += partySize
//     },
//     // remove party from guestCount
//     removeParty: function (partySize) {
//         this.guestCount -= partySize
//     }
// }

// restaurant.seatParty(72)
// console.log(restaurant)
// console.log(restaurant.checkAvailability(5))

// restaurant.removeParty(5)
// console.log(restaurant)
// console.log(restaurant.checkAvailability(5))

// //----------------------------------------------
// // STRING METHODS
// let name = "Uyen Truong"
// // length property:
// console.log(name.length)

// // toUpperCase() Method:
// console.log(name.toUpperCase())

// // toLowerCase() Method:
// console.log(name.toLowerCase())

// //includes() Method: find certain characters/strings of a string
// let password = " abc123password098 "
// console.log(password.includes('abc')) //check if var password contains the string "abc"

// // trim() Method: remove certain characters/string in a string
//     //str.trim() with no arg passed in - remove whitespace before & after the string
// console.log(password)
// console.log(password.trim())

// // List of STRING METHODS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// // Challenge:

// //isValidPassword function. Criteria:
//     // length >= 8
//     // doesn't contain the word password

// let isValidPassword = function(password){
//     // if ((password.length > 8) && (!password.includes("password"))){
//     //     return true
//     // } else {
//     //     return false
//     // }
//     // Shorter way:
//     return (password.length > 8) && (!password.includes("password"))
// }

// console.log(isValidPassword("asdfp"))
// console.log(isValidPassword("abc123!@#$%^&"))
// console.log(isValidPassword("asdfghpassword"))

//----------------------------------------------
// NUMBER METHODS
let num = 103.941
// toFixed(): fix the number to certain # of decimal places
console.log(num.toFixed(2))

// Math.round(): round to the NEAREST integer
console.log(Math.round(num))

// Math.floor(): round to the NEAREST LOWER integer
console.log(Math.floor(num))

// Math.ceil(): round to the NEAREST HIGHER integer
console.log(Math.ceil(num))

// Math.random(): generate random number
let min = 10
let max = 20
let randomNum = Math.floor((Math.random() * (max - min + 1))) + min //formula to get the range of a given min & max
// no arg --> 0 - .9999999999~
console.log(randomNum)

// List of NUMBER METHODS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// List of MATH-RELATED METHODS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math?retiredLocale=vi

// Challenge:
// random 1 - 5 --> true if correct
let makeGuess = function(correct){
    let min = 1
    let max = 5
    let randomNum = Math.floor((Math.random() * (max - min + 1))) + min
    console.log(randomNum)
    return randomNum === correct
}
console.log(makeGuess(1))
