//----------------------------------------------
// ARRAY BASICS
const notes = ['Note 1', 'Note 2', 'Note 3', 'Note 4', 'Note 5']
console.log(notes.length) //print out the # of array items

// List of ARRAY METHODS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log(notes[0]) //index starts at 0 --> print out 'Note 1'
console.log(notes[2]) // print out the last item- 'Note 3'
console.log(notes[notes.length-1]) // also print out the last item- 'Note 3'

//----------------------------------------------
// ARRAY METHODS
// .push(newItem): Add a new item to the end of the array
notes.push('My new note')
console.log(notes) //new note added

// .pop(): Remove the last item in the array
notes.pop()
console.log(notes)

// .shift(): Remove the FIRST item in the array
notes.shift() // 'Note 1' is removed
console.log(notes)

// .unshift(newItem): Add a new item at the beginning of the array
notes.unshift('My first note')
console.log(notes)

// .splice(index, # you want to remove): Remove item(s) from the middle of the array
notes.splice(1, 2) //remove 2 items starting from index 1
console.log(notes)

// .splice(index, 1, newItem): Replace the item at the specied index with a new one
notes.splice(2,1, 'This is the replaced item') //replace 'Note 5' at index 2 with the new item
console.log(notes)

// .splice(index, 0, newItem): ADD a new item at the specified index
notes.splice(1, 0, 'This is the added item') //add the new item at index 1
console.log(notes)

// Change value of an item:
notes[0] = 'Note 1'
notes [1] = 'Note 2'
notes[2] = 'Note 3'
notes[3] = 'Note 4'
console.log(notes)

//----------------------------------------------
// .FOREACH() LOOP METHOD FOR ARRAYS

// .forEach(function): loop thru the array and conduct the action for each of the items

let testing = function(){
    console.log('testing')

}
notes.forEach(testing) // call function 'testing'

// define function directly in the .forEach()
notes.forEach(function (){
    console.log('testing 123')
})

// pass function (item, index) {}: loop and take the item as well as the index of each item
// Callback Function: function within a function
notes.forEach (function (item, index) {
    console.log(index)
    console.log(item)
})

//----------------------------------------------
// FOR LOOP STATEMENT
// THREE parts of a For loop statement:
    // 1. initializer
    // 2. condition
    // 3. final expression

// Count forward 0-2
// In C#: for (int i = 0; i <= 5; i++)
for (let i = 0; i <= 2; i++) {
    console.log(i)
}

// Count backward 2-0
for (let i = 2; i >= 0; i--) {
    console.log(i)
}

// Count even numbers 0-10 only
for (let i = 0; i <= 10; i = i + 2){
    console.log(i)
}
// Equivalent to .forEach() method:
// Print out first-last items of the array
for (let count = 0; count < notes.length; count++){
    console.log(notes[count])
}

// Print out last-first items of the array
for (let count = notes.length - 1; count >= 0; count--){
    console.log(notes[count])
}

//----------------------------------------------
// SEARCHING ARRAY

// .indexOf(item): find the index for the specified item
console.log(notes.indexOf('Note 2'))

// Turn the item to individual objects:
const noteArr = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get new seats'
}]

// Search for an item that doesn't exist in the array:
console.log(noteArr.indexOf({title: "Packing list", body: "Don't forget sunscreen"})) //output -1

let someObject = {
    name: 'obj1',
    category: 'chair'
}
let otherObject = {
    name: 'obj2',
    category: 'desk'
}
console.log(someObject === otherObject) // print out true/false

// .findIndex(): allow passing in a function
const index = noteArr.findIndex(function (note, index){
    console.log(note)
    return note.title === 'Habbits to work on'
}) // print out the item up until the condition is true (= 'Habbits to work on')










