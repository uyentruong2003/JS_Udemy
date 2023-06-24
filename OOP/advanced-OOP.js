// Class: is a different way to structure the codes relating to and object
class PersonClass {
    constructor (firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
        this.likes.forEach((like) => { //must use arrow function in order to access this.firstName
            bio += ` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    //SETTER:
    set fullName (fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    //GETTER:
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
const myPerson = new PersonClass('Andrew','Mead',20, ['interning'])
console.log(myPerson)
myPerson.fullName = 'Uyen Truong' //change fullName
console.log(myPerson.getBio())

// SUBCLASS: a class derived from another class
class Employee extends PersonClass {
    // new version of person
    constructor(firstName, lastName, age, position, likes){
        //get these from the PersonClass
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio (){
        return `${this.fullName} is a ${this.position}`
    }
    getYearsLeft () {
        return 65 - this.age
    }
}
const myEmployee = new Employee('Uyen','Truong',20, 'Intern', ['kpop dancing'])
console.log(myEmployee)
console.log(myEmployee.getBio())
console.log(myEmployee.getYearsLeft())

// Challenge: create a subclass:
class Student extends PersonClass {
    constructor(firstName, lastName, age, grade) {
        super (firstName, lastName, age)
        this.grade = grade
    }
    updateGrade(change){
        this.grade += change
    }
   
    getBio (){
        const status = this.grade >= 70 ? 'passing':'failing'
        return `${this.firstName} is ${status} the class`
    }    
}
const myStudent = new Student ('Uyen','Truong', 20, 90)
console.log(myStudent.getBio())
myStudent.updateGrade(-30)
console.log(myStudent.getBio())

// WITHOUT USING CLASS:
// Constructor function- initialize an obj
const Person = function (firstName, lastName, age, likes = []){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

// Prototypal Inheritance: 
// add a shared method to all the instances of an object
Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => { //must use arrow function in order to access this.firstName
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
}

// add a static data for all the instances of an object
Person.prototype.location = 'Vietnam'

// Challenge: set first and last names given the fullName
Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
    return names
}

const me = new Person('Uyen','Truong', 20, ['Pilates', 'Yoga']) //initialize an obj
console.log(me.getBio())
console.log(me.location)
me.setName('Uyen Truong')
const teacher = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
console.log(teacher.getBio())
console.log(teacher.location)
console.log(teacher.setName('Andrew Mead'))

// changes to the instance prototype will not be reflected in other instances
me.getBio = function (){
    return "Only affects me instance"
}
console.log(me.getBio())
console.log(teacher.getBio())


// changes to the prototype will be reflected in any calls after
Person.prototype.getBio = function (){
    return "Testing testing"
}
console.log(teacher.getBio())

// ----------------------------------------------
// PROTOTYPAL INHERITANCE
//Prototype chain for OBJECTS: object --> Obj.prototype --> null
const myProduct = {
    name: 'Influence'
}

// Overwriting/creating new method
Object.prototype.someNewMethod = () => 'This is the new function'
//hasOwnProperty:
console.log(myProduct.hasOwnProperty('hasOwnProperty'))
console.log(myProduct)
console.log(myProduct.someNewMethod())

// Another way to create an object
const item = new Object() [{
    name: 'The War of Art'
}]

// Primitive value: doesn't have properties, non-object values; This includes: string, number, boolean, null, undefined
// Prototype chain for ARRAYS: array --> Array.prototype --> Object.prototype --> null
const myTeam = ['Luke', 'Madison']
console.log(myTeam.hasOwnProperty('filter'))

// Prototype chain for FUNCTIONS: function --> Function.prototype --> Object.prototype --> null
const getScore = () => 1
console.log(getScore)

// Prototype chain for STRING: string --> String.prototype --> Object.prototype --> null
// Prototype chain for NUMBER: number --> Number.prototype --> Object.prototype --> null
// Prototype chain for BOOL: boolean --> Boolean.protype --> Object.prototype --> null
const otherProduct = 'Computer'
console.log(otherProduct)

// ----------------------------------------------
// GETTERS & SETTERS
const data = {
    locations: [],
    // getter:
    get location() {
        return this._location
    },
    // setter"
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

data.location = ' NYC'
data.location = ' Tuscaloosa'
console.log(data)

// ----------------------------------------------
// HTTP- HYPERTEXT TRANSFER PROTOCOL REQUEST
    // Request: What we want to do
    // Response: What was actually done

// Initialize the request:
const request = new XMLHttpRequest()

request.open('GET','http://puzzle.mead.io/puzzle')
request.send()

// Event listener to add event when the the request is done (response is received)
request.addEventListener('readystatechange',(e) =>{
    //readyState: check which state the HTTP operation on request is at; 4 is done
    if(e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4){
        console.log("An error has occurred")
    }
})

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

const countryRequest = new XMLHttpRequest()
countryRequest.open('GET','http://restcountries.com/v3.1/all')
countryRequest.send()

// using the queried data:
const countryCode = 'VN'
countryRequest.addEventListener('readystatechange', (e) => {
    //if successful fetching:
    if (e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        //find the country with code VN
        const myCountry = data.find((country)=> {return country.alpha2Code === countryCode})
        console.log(myCountry.name)
    }  else if (e.target.readyState === 4){
        console.log("An error has occurred")
    }
})