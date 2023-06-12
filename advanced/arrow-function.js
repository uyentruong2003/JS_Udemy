// ----------------------------------------------
// ARROW FUNCTIONS
// Original way for function declaration
const squareFull = function (num) {
    return num*num
}
// Alternative way for function declaration
const squareLong = (num)  => {
    return num*num
}

// Shorthand syntax
const squareShort = (num) => num*num

console.log(squareShort(5))

const people = [{
    name: 'Andrew',
    age: 27
},{
    name: 'John',
    age: 22
},{
    name: 'Jane',
    age: 33
}]

// Original:
const under30Full = people.filter(function (person){
    return (person.age < 30)
})

console.log(under30Full)

// Shortened:
const under30Short = people.filter((person) => person.age <30)
console.log(under30Short)

//  Challenge:
const is22 = people.find((person) => person.age === 22)
console.log(is22.name)

const add = function (a,b){ //declare only 2 args
    console.log(arguments)
}

add (11,22,33,44) //pass in 4 args but still OK

const car = {
    color: 'Red',
    getSummary: function () { //arrpw function can't work for obj's method
        return `The car's color is ${this.color}`
    },
    // another workable syntax
    getSummary2() {
        return `The car's color is ${this.color}`
    }
}

console.log(car.getSummary())
console.log(car.getSummary2())