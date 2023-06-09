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

// JS Dates:
// Unix Epoch: representing date & time with numbers
const now = new Date('January 21 2001 6:25:01')
console.log(now.getTime()) // return Unix Epoch timestamp

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`) //Jan is 0, Feb is 1, etc.
// console.log(`Day of the Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Second: ${now.getSeconds()}`)