// // DOM - DOCUMENT OBJECT MODEL
// // Manipulate the content of the website in JS file
let notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get new seats'
}]
// //----------------------------------------------
// QUERY & REMOVE ELEMENTS
// // 'p' paragraph tag 
// // .querySelector ('tagName'): query the FIRST paragraph & remove
// const p = document.querySelector('p')
// p.remove()

// // Query ALL & remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p){
//     // print out the content of each paragraphs on console
//     console.log(p.textContent)
//     // change the paragraph's text
//     p.textContent = 'Change the text'
// })

// //----------------------------------------------
// // ADD ELEMENTS

// //(1) create the element; in this case, create a 'p' tag element
// const summary = document.createElement('p')
// //(2) create the text content of the element
// summary.textContent = 'This is a new element from JS'
// //(3) append the element INSIDE of another tag; in this case, 'body' tag:
// document.querySelector('body').appendChild(summary)

// // Add the objects in the array:
// notes.forEach(function (note, index){
//     const p = document.createElement('p')
//     p.textContent = note.title
//     document.querySelector('body').appendChild(p)
// })

// //----------------------------------------------
// // EVENT HANDLERS
// // Events: click a button, hover over a text, etc.
// // .addEventListener('action','function'): create an event
// document.querySelector('button').addEventListener('click', function (event){
//     event.target.textContent = 'The button was clicked'
// })
// // Documentation source for addEventListener(): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// //----------------------------------------------
// // ADVANCED QUERIES

// // Query an element different than the first one:
// // Select the second button by query all buttons and specified the one at index 1:
// document.querySelectorAll('button')[1].addEventListener('click', function (e) {
//     e.target.textContent = 'All notes deleted'
// })

// // A different approach to target an element directly: IDs & Classes
// // ID: a unique identifier of an element
//     // add attribute id to the element
//     // use # in front of the element's id
// document.querySelector('#remove-all').addEventListener('click', function (e){
//     e.target.textContent = 'All notes deleted'
// })

// // CLASS: can be held by multiple elements
// document.querySelector('#remove-all').addEventListener('click', function (e){
//     e.target.textContent = 'All notes deleted'
//     // delete the notes, query by addressing class 'note' (dot+className):
//     document.querySelectorAll('.note').forEach(function (note){
//         note.remove()
//     })
// })

// //Query Syntax:
// // -- Single element --
//     // tag e.g., p
//     // id e.g., #remove-all
//     // class e.g., .note

// // -- Multiple elements --
//     //p#order (tag paragraph, id order)
//     //button.inventory (tag button, class inventory)
//     //h1#title.application (tag h1, id title, class application)
//     // h1.application#title(tag h1, class application, id title)
// // ---> the order doesn't matter; however, tag should always come first

// //----------------------------------------------
// // TEXT INPUT & LIVE DATA FILTERING
// // In HTML file, create element <input> with attribute id (search-text), type (text), and placeholder (Filter note)
// // 'change': finish typing & click enter/ out of the input box to start the function
// // 'input': live recording of the input down to every single keystroke
// document.querySelector('#search-text').addEventListener('input', function (e){
//     console.log(e.target.value)
// })

//----------------------------------------------
// RENDERING FILTERED DATA

// Create an object to hold the searchText
const filters = {
    searchText: ''
}

// Print the notes that contain the searchText
const renderNotes = function (notes, filters) {
    // only filter the notes that contain the searchText
    const filtered = notes.filter( function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // Clear the div of the previous search result
    document.querySelector('#notes').innerHTML = ''
    // Print on screen the filtered notes:
    filtered.forEach(function(filteredNote){
        const noteEl = document.createElement('p')
        noteEl.textContent = filteredNote.title
        document.querySelector('#notes').appendChild(noteEl)
    })

}

// When the user enter the input, filter the array & print on console the notes containing the searchText
document.querySelector('#search-text').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderNotes (notes, filters)
})

// ----------------------------------------------
// WORKING WITH FORM
document.querySelector('#name-form').addEventListener('submit', function (e){
    // avoid the default behavior of refreshing the page with a new URL
    e.preventDefault()
    // e.target.element: access all the elements in the field
    // firstName.value(): get the value of the input tag named 'firstName':
    console.log(e.target.elements.firstName.value)
    // clear the previously entered value:
    e.target.elements.firstName.value = ''
})

// ----------------------------------------------
// WORKING WITH CHECKBOX
document.querySelector('#for-fun').addEventListener('change', function (e){
    // e.target.checked: boolean, show if the box is checked
    console.log(e.target.checked)
})

// ----------------------------------------------
// WORKING WITH DROPDOWN
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

// // ----------------------------------------------
// // SAVING DATA IN LOCALSTORAGE (CRUD)
// // C: CREATE local storage (localStorage.setItem())
// localStorage.setItem('location', 'Philadelphia')
// // R: READ local storage (localStorage.getItem())
// console.log(localStorage.getItem('location'))
// // U: UPDATE local storage (using setItem as Create)
// localStorage.setItem('location','Austin')
// // R: REMOVE local from local storage
// localStorage.removeItem('location')
// localStorage.clear() //delete all

// //localStorage only stores STRING; 
// // if you store an object/array, you have to convert it to string

// const userObj1 = {
//     name: 'Uyen',
//     age: 20
// }

// // use JSON to convert Obj/Arr to String & vice versa
// // Obj --> String (JSON)
// const userString1 = JSON.stringify(userObj1)
// console.log(userString1)
// localStorage.setItem('user',userString1)

// // String (JSON) --> Obj
// const userString2 = localStorage.getItem('user')
// const userObj2 = JSON.parse(userString2)
// console.log(`${userObj2.name} is ${userObj2.age}`)

// ----------------------------------------------
// JS DATES

const date1 = new Date('May 10th 2023 12:00:00')
const date2 = new Date('March 15th 2023')

// Unix Epoch: representing date & time with numbers
const timestamp1 = date1.getTime()
const timestamp2 = date2.getTime()

// Compare the 2 and print the one that go first
if (timestamp1 <= timestamp2){
    console.log(date1.toString())
} else {
    console.log(date2.toString())
} 

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`) //Jan is 0, Feb is 1, etc.
// console.log(`Day of the Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Second: ${now.getSeconds()}`)

// ----------------------------------------------
// MOMENT JS LIBRARY
const example = moment()
console.log(example.toString())
example.minute(1) //set the minute
console.log(example.toString())
console.log(example.minute().toString()) //get the minute

const now = moment()
console.log(now.toString())
now.minute(1) //set the minute
console.log(now.toString())
console.log(now.minute().toString()) //get the minute
now.add(1,'year').subtract(20, 'days') //add 1 year, subtract 20 days to the date
console.log(now.toString())
// Show in format as such: November 3rd, 2003
console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())

//from date to unix epoch timestamp
const nowTimestamp = now.valueOf()
console.log(nowTimestamp)

//from unix epoch timestamp to date
console.log(moment(nowTimestamp).toString())

// Challenge:
const birthday = moment()
birthday.month(2) //Mar is 2 because Jan is 0
birthday.date(15)
birthday.year(2003)

console.log(birthday.format('MMMM D, YYYY'))

