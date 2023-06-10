// Read existing notes from local storage
let notes = getSavedNotes()

// An Object that holds filters
const filters = {
    // filter by search
    searchText: ''
}

renderNotes(notes, filters)

// Add a new note:
document.querySelector('#add-note-form').addEventListener('submit', function (e){
    e.preventDefault()
    // put the new input values to an object
    let newNote = {
        id: uuidv4(),
        title: e.target.elements.newNoteTitle.value,
        body: e.target.elements.newNoteBody.value
    }
    // add to array
    notes.push(newNote)
    // clear input boxes
    e.target.elements.newNoteTitle.value = ''
    e.target.elements.newNoteBody.value = ''
    // Save in storage:
    saveNotes(notes)
    renderNotes(notes,filters)

})

// Create note button to re-direct to a new page for input:
document.querySelector('#create-note').addEventListener('click', function (e){
    let newNote = {
        id: uuidv4(),
        title: '',
        body:''
    }
    notes.push(newNote)
    saveNotes(notes)
    location.assign(`/JS_Udemy/notes-app/notes-app-final/edit.html#${newNote.id}`)
})

// Syncing Data Across the Pages:
window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue) //get the latest data from storage
        renderNotes(notes, filters)
    }
})

// Working with drop down:
document.querySelector('#sort-by').addEventListener('change', function(e){
    if (e.target.value === 'alphabetical'){
        sortAlphabetically(notes)
    }
    renderNotes(notes, filters)
})

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