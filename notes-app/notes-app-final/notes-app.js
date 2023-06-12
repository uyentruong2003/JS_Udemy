// Read existing notes from local storage
let notes = getSavedNotes()

// An Object that holds filters
const filters = {
    // filter by search
    searchText: ''
}

renderNotes(notes, filters)

// Add a new note:
// timestamp:
const timestamp = moment()
document.querySelector('#add-note-form').addEventListener('submit', function (e){
    e.preventDefault()
    // put the new input values to an object
    let newNote = {
        id: uuidv4(),
        title: e.target.elements.newNoteTitle.value,
        body: e.target.elements.newNoteBody.value,
        createdAt: timestamp,
        updatedAt: timestamp
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
        body:'',
        createdAt: timestamp,
        updatedAt: timestamp
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

