// Constructor function- initialize an obj
const Person = function (firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Uyen','Truong', 20) //initialize an obj
console.log(me)

const teacher = new Person('Andrew', 'Mead', 27)
console.log(teacher)