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
    setName (fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
        return names
    }
}
const myPerson = new PersonClass('Uyen','Truong',20, ['interning'])
console.log(myPerson)
console.log(myPerson.getBio())
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
console.log(me.setName('Uyen Truong'))
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
