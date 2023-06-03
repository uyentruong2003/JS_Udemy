// Read existing notes from local storage
let notes = getSavedNotes()

// An Object that holds filters
const filters = {
    // filter by search
    searchText: ''
}

// Add a new note:
document.querySelector('#add-note-form').addEventListener('submit', function (e){
    e.preventDefault()
    // put the new input values to an object
    let newNote = {
        title: e.target.elements.newNoteTitle.value,
        body: e.target.elements.newNoteBody.value
    }
    // add to array
    notes.push(newNote)
    // clear input boxes
    e.target.elements.newNoteTitle.value = ''
    e.target.elements.newNoteBody.value = ''
    // Save in storage:
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes,filters)

})