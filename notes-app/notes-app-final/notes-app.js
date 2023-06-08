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
