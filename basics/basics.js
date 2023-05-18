
// //----------------------------------------------
// // STRING VAR
// // declare all var by using 'let'
// // use Camel case to name the var
// let firstName = 'Uyen'
// let lastName = 'Truong'
// let fullName = firstName + ' ' + lastName // concatenation operator
// // print on console
// //console.log(fullName); // semi-colon is optional

// //Challenge:
// let city = 'New York'
// let country = 'United States'
// let location = city + ', '+ country
// //console.log(location);

// //----------------------------------------------
// // NUM VAR
// let age = 26 // can be any- integer, decimal, calculation
// let dogYears = (age + 1) / 7
// //console.log(dogYears)

// //challenge:
// let maxScore = 20
// let studentScore = 15
// let percentage = (studentScore/maxScore) * 100
// //console.log(percentage)

// //----------------------------------------------
// //MORE ON VARIABLE
// // Rule #1: You can re-assign new values to the same var but CANNOT declare 2 vars with the same name
// let petName = 'Cash'
// petName = 'Ginger' // re-assign a new value
// //console.log(petName)
// // Rule #2: Name of var can only start with a letter and $ or _ signs.
//     //Name cannot contain special character AT ALL execept $ and _
//     //Name cannot contain reserved keywords e.g., let
// let $dollarSign = 200
// let _underdashSign = ''

// //Challenge:
// let fahrenheit = 50
// // calc celsius temperature
// let celsius = (fahrenheit-32) / (1.8)
// console.log(celsius)
// // calc kevin temperature
// let kelvin = (fahrenheit-32)/1.8 + 273.15
// console.log(kelvin)

// //----------------------------------------------
// // BOOL VAR & COMPARISON OPERATORS
// // === : equal operator
// // !== : not equal operator
// // < : less than operator
// // > : greater than operator
// // <= : less than/ equal to operator
// // >= : greater than/ equal to operator

// let temp = 32
// // if temp = 32, return true for isFreezing
// let bool = true
// let isFreezing = temp === 32
// let isBelowFreezing = temp < 32
// console.log(bool)
// console.log(isFreezing)
// console.log(isBelowFreezing)

// //Challenge:
// let age = 5
// let isChild = age <= 7
// let isSenior = age >= 65
// console.log(isChild)
// console.log(isSenior)

// //----------------------------------------------
// //IF-ELSE STATEMENT
// let temp = 80
// let isFreezing = temp <= 32

// if (isFreezing){
//     console.log('It is freezing outside!')
// }
// if (temp >= 110){
//     console.log('It is way to hot outside')
// }

// // Challenge:
// let age = 20
// if (age <=7){
//     console.log('You will get a child discount')
// }
// if (age >=65){
//     console.log('You will get a senior discount')
// }

// //----------------------------------------------
// // IF-ELSE STATEMENT
// let isAccountLocked = false
// let userRole = 'admin'
// if (isAccountLocked){
//     console.log('Account is locked')
// } else {
//     console.log('Welcome!')
// }

// // Adding: if user role = admin, print welcome admin instead
// if (isAccountLocked){
//     console.log('Account is locked')
// } else if (userRole === 'admin') {
//     console.log('Welcome Admin!')
// } else {
//     console.log('Welcome!')
// }

// // Challenge:
// let temp = 45

// if (temp <= 32){
//     console.log("It's freezing outside")
// } else if (temp >= 110){
//     console.log("It's way too hot outside")
// }else{
//     console.log("It's pretty nice out")
// }

// //----------------------------------------------
// // LOGICAL OPERATORS (AND/OR)
// let temp = 100
// // AND Operator- True if both conditions are true.
//             // - False if one or both conditions are false
// if (temp >= 60 && temp <= 90){
//     console.log("It's pretty nice out")
// }

// // OR Operator- True if either of the conditions is true.
//             //- False if both conditions are false
// if (temp <= 0 || temp >= 120){
//     console.log("Extreme weather")
// }

// //Combined into If-Else Statement:
// if (temp >= 60 && temp <= 90){
//     console.log("It's pretty nice out")
// } else if (temp <= 0 || temp >= 120){
//     console.log("Extreme weather")
// } else{
//     console.log("It's not nice outside")
// }

// // Challenge:
// let isGuestOneVegan = true
// let isGuestTwoVegan = false
// // Are both vegan? Only offer vegan dishes
// // At least 1 vegan? Make sure to offer some vegan options
// // Else, Offer up anything on the menu
// if (isGuestOneVegan === true && isGuestTwoVegan === true){
//     console.log("Vegan-only Options")
// } else if (isGuestOneVegan === true || isGuestTwoVegan === true){
//     console.log("Make sure to offer some vegan options")
// } else {
//     console.log("Offer everything on the menu")
// }

// //----------------------------------------------
// // VARIABLE SCOPE:

// // JS uses Lexical Scope (Static Scope):
//     // Global scope - Defined outside of ALL code blocks {}
//         // Local scope - Defined inside a code block {}
// // In a scope, you can access variables defined in that scope, or in any parent/ancestor scopes
// let var1 = 'varOne' //global var

// // var1: global scope
//     //var2: local scope #1
//         //var4: local scope #2
//     //var3: local scope #1
// if (true) {
//     console.log(var1)
//     let var2 = 'varTwo' //local var, child of global scope 
//     if (true) {
//         let var4 = 'varFour' // local var, child of the scope containing var2 & var1
//     }
// }
// if (true){
//     let var3 = 'varThree' //local var, child of global scope 
// }

// // 2 vars can have the same name if they're in different scopes
// let name = "Andrew"

// if (true) {
//     let name = "Mike"

//     if (true) {
//         name = "Jen" //change Mike to Jen
//         console.log(name) //print out Jen
//     }
// }

// if (true) {
//     console.log(name) //print out Andrew
// }

// //Leaked Global:

// if(true) {
//     name1 = "Katy" // tho name1 is not declared, the program understands as it is and makes it into a global variable
//     console.log(name1)
// }

// if (true) {
//     console.log(name1)
// }
