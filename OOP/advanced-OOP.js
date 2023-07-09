// // Class: is a different way to structure the codes relating to and object
// class PersonClass {
//     constructor (firstName, lastName, age, likes = []) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.likes = likes
//     }
//     getBio() {
//         let bio = `${this.firstName} is ${this.age}.`
//         this.likes.forEach((like) => { //must use arrow function in order to access this.firstName
//             bio += ` ${this.firstName} likes ${like}.`
//         })
//         return bio
//     }
//     //SETTER:
//     set fullName (fullName) {
//         const names = fullName.split(' ')
//         this.firstName = names[0]
//         this.lastName = names[1]
//     }
//     //GETTER:
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// const myPerson = new PersonClass('Andrew','Mead',20, ['interning'])
// console.log(myPerson)
// myPerson.fullName = 'Uyen Truong' //change fullName
// console.log(myPerson.getBio())

// // SUBCLASS: a class derived from another class
// class Employee extends PersonClass {
//     // new version of person
//     constructor(firstName, lastName, age, position, likes){
//         //get these from the PersonClass
//         super(firstName, lastName, age, likes)
//         this.position = position
//     }
//     getBio (){
//         return `${this.fullName} is a ${this.position}`
//     }
//     getYearsLeft () {
//         return 65 - this.age
//     }
// }
// const myEmployee = new Employee('Uyen','Truong',20, 'Intern', ['kpop dancing'])
// console.log(myEmployee)
// console.log(myEmployee.getBio())
// console.log(myEmployee.getYearsLeft())

// // Challenge: create a subclass:
// class Student extends PersonClass {
//     constructor(firstName, lastName, age, grade) {
//         super (firstName, lastName, age)
//         this.grade = grade
//     }
//     updateGrade(change){
//         this.grade += change
//     }
   
//     getBio (){
//         const status = this.grade >= 70 ? 'passing':'failing'
//         return `${this.firstName} is ${status} the class`
//     }    
// }
// const myStudent = new Student ('Uyen','Truong', 20, 90)
// console.log(myStudent.getBio())
// myStudent.updateGrade(-30)
// console.log(myStudent.getBio())

// // WITHOUT USING CLASS:
// // Constructor function- initialize an obj
// const Person = function (firstName, lastName, age, likes = []){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// // Prototypal Inheritance: 
// // add a shared method to all the instances of an object
// Person.prototype.getBio = function () {
//     let bio = `${this.firstName} is ${this.age}.`
//     this.likes.forEach((like) => { //must use arrow function in order to access this.firstName
//         bio += ` ${this.firstName} likes ${like}.`
//     })
//     return bio
// }

// // add a static data for all the instances of an object
// Person.prototype.location = 'Vietnam'

// // Challenge: set first and last names given the fullName
// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
//     return names
// }

// const me = new Person('Uyen','Truong', 20, ['Pilates', 'Yoga']) //initialize an obj
// console.log(me.getBio())
// console.log(me.location)
// me.setName('Uyen Truong')
// const teacher = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
// console.log(teacher.getBio())
// console.log(teacher.location)
// console.log(teacher.setName('Andrew Mead'))

// // changes to the instance prototype will not be reflected in other instances
// me.getBio = function (){
//     return "Only affects me instance"
// }
// console.log(me.getBio())
// console.log(teacher.getBio())


// // changes to the prototype will be reflected in any calls after
// Person.prototype.getBio = function (){
//     return "Testing testing"
// }
// console.log(teacher.getBio())

// // ----------------------------------------------
// // PROTOTYPAL INHERITANCE
// //Prototype chain for OBJECTS: object --> Obj.prototype --> null
// const myProduct = {
//     name: 'Influence'
// }

// // Overwriting/creating new method
// Object.prototype.someNewMethod = () => 'This is the new function'
// //hasOwnProperty:
// console.log(myProduct.hasOwnProperty('hasOwnProperty'))
// console.log(myProduct)
// console.log(myProduct.someNewMethod())

// // Another way to create an object
// const item = new Object() [{
//     name: 'The War of Art'
// }]

// // Primitive value: doesn't have properties, non-object values; This includes: string, number, boolean, null, undefined
// // Prototype chain for ARRAYS: array --> Array.prototype --> Object.prototype --> null
// const myTeam = ['Luke', 'Madison']
// console.log(myTeam.hasOwnProperty('filter'))

// // Prototype chain for FUNCTIONS: function --> Function.prototype --> Object.prototype --> null
// const getScore = () => 1
// console.log(getScore)

// // Prototype chain for STRING: string --> String.prototype --> Object.prototype --> null
// // Prototype chain for NUMBER: number --> Number.prototype --> Object.prototype --> null
// // Prototype chain for BOOL: boolean --> Boolean.protype --> Object.prototype --> null
// const otherProduct = 'Computer'
// console.log(otherProduct)

// // ----------------------------------------------
// // GETTERS & SETTERS
// const country = {
//     locations: [],
//     // getter:
//     get location() {
//         return this._location
//     },
//     // setter"
//     set location(value) {
//         this._location = value.trim()
//         this.locations.push(this._location)
//     }
// }

// country.location = ' NYC'
// country.location = ' Tuscaloosa'
// console.log(country)

// // ----------------------------------------------
// // HTTP- HYPERTEXT TRANSFER PROTOCOL REQUEST
//     // Request: What we want to do
//     // Response: What was actually done

// // Initialize the request:
// const request = new XMLHttpRequest()

// request.open('GET','http://puzzle.mead.io/puzzle')
// request.send()

// // Event listener to add event when the the request is done (response is received)
// request.addEventListener('readystatechange',(e) =>{
//     //readyState: check which state the HTTP operation on request is at; 4 is done
//     if(e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         console.log(data)
//     } else if (e.target.readyState === 4){
//         console.log("An error has occurred")
//     }
// })

// ----------------------------------------------
// HTTP ERRORS & MESSAGE READING
// Status code: let you know if the HTTP request is a success/failure
// use e.target.status --> check for the status code
//200: success
// Query: add after the url this: ?key=value (key is the criteria, value is your desired value for that criteria)
// e.g., URL is http://puzzle.mead.io/puzzle --> query only the hangman phrase with wordcount 2: http://puzzle.mead.io/puzzle?wordCount=2
// Check for status code errors: httpstatuses.com (common status codes are in 2xx=success and 4xx-errors range)
// A resource that helps to understand http message: mdn http message
    //start-line: type of request (REQUEST MESSAGE)/ status code (RESPONSE MESSAGE) and the protocol version
    // header: general data of the browser, who the request/response is from, date, etc.
    // blank space separating header & body
    // body: what is requested

// Challenge:
// 1. Make a new request for all countries
// 2. Parse the responseText to get back the array of objects
// 3. Find your country obj by its country code (alpha2Code property)
// 4. Print the full country name (name property)


// // ----------------------------------------------
// // CALL BACK FUNCTION & ASYNCHRONOUS EXECUTION
const countryCode = 'VN'
// // Challenge
// making a function that accepts a callback function as an argument
const getCountry= (countryCode, callback) =>{
    const countryRequest = new XMLHttpRequest()
    //get all data
    countryRequest.open('GET','https://restcountries.com/v3.1/all')
    countryRequest.send()

    // event listener
    countryRequest.addEventListener('readystatechange', (e) => {
        //if successful fetching:
        if (e.target.readyState === 4 && e.target.status === 200){
            data = JSON.parse(e.target.responseText)
            // console.log(data)
            //find the country with code VN
            myCountry = data.find((country)=> {return country.cca2 === countryCode})
            callback(undefined,myCountry)
        }  else if (e.target.readyState === 4){
            console.log("Unable to fetch data", undefined)
        }
    })

}

getCountry(countryCode,(error, country) => {
    if (error){
        console.log(`Error: ${error}`)
    } else {
        console.log(`Call back: ${country.name.common}`)
    }
})

// // ----------------------------------------------
// // PROMISE: instead of using callbacks, using promise so the codes are neater
getCountryPromise = (countryCode) => new Promise ((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open ('GET',`https://restcountries.com/v3.1/alpha?codes=${countryCode}`)
    request.send()

    request.addEventListener('readystatechange',(e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data[0].name.common)
        } else if (e.target.readyState === 4){
            reject('An error occurred')
        }
    })
})

// Display on screen
getCountryPromise(countryCode).then((countryName) => {
    console.log(`Promise: ${countryName}`)
    //print on screen
    const textEl = document.querySelector('#display-country')
    textEl.textContent = countryName
}, (error) => {
    console.log(error)
})

// // ----------------------------------------------
// // FETCH API: fetch() integrates XMLHTTPRequest & Promise in one
// Challenge:
const fetchCountry = (countryCode) => {
    return fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`, {})
    // check if the request is successful --> convert to json & return as a Promise
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else { // if error, throw a new error
                throw new Error('Fetch error');
            }
        })
        // access the data in the response & return
        .then((data) => {
            return data[0].name.common;
        });
};


fetchCountry(countryCode)
    .then((countryName) => {
        console.log(`Fetch ver 1: ${countryName}`);
    // catch the error thrown
    }).catch((error) => {
        console.log(error);
    });


// The promise & fetch example above fetch the country name by passing the country code directly into the URL
// This below example fetches all data and find the country with the same countryCode as specified
const fetchCountryV2 = (countryCode) => {
    return fetch('https://restcountries.com/v3.1/all')
    .then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Fetch ver2 error')
        }
    })
    .then((data) => data.find((country) => {return country.cca2 === countryCode}))
}

fetchCountryV2(countryCode)
.then((country) => {
    console.log(`Fetch ver 2: ${country.name.common}`)
})
.catch((error) => {
    console.log(error)
})

// 1. Create getLoc which takes no arg
// 2. Setup getLoc to make a request to the url and parse the data
// 3. Use getLoc to print the city, region, and country info

const fetchLoc = () => {
    return fetch("http://ipinfo.io/json?token=64c6e25bebbd56")
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Unable to fetch location")
        }
    })
    .then((data) => {
        return data
    })
}
fetchLoc().then((myLoc) => {
    console.log(`Based on your computer's IP address (${myLoc.ip}), you're currently in ${myLoc.city}, ${myLoc.country}`)
}).catch((err) => {
    console.log(err)
})

// Promise Chaining to chain fetchLoc and fetchCountryV2 together
fetchLoc().then((loc) => {
    return fetchCountryV2(loc.country)
}).then((country) => {
    console.log(`I am chaining fetchLoc and fetchCountryV2, here's the result: ${country.name.common}`)
}).catch((error) => {
    console.log(error)
})
