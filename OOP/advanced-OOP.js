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