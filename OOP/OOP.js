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

//----------------------------------------------
// STRING METHODS: