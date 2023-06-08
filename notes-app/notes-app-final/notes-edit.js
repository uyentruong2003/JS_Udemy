const noteId = location.hash.substring(1) //exclude the hash
const notes = getSavedNotes()
const note = notes.find(function (note){
    return note.id === noteId
})

if (note === undefined) {
    location.assign("/JS_Udemy/notes-app/notes-app-final/index.html")
}

let noteTitle = document.querySelector('#note-title')
let noteBody = document.querySelector('#note-body')

//get the current inputs for title & body:
noteTitle.value = note.title
noteBody.value = note.body

//save the change:
noteTitle.addEventListener('input', function(e){
    note.title = e.target.value
    saveNotes(notes)
})
noteBody.addEventListener('input', function(e){
    note.body = e.target.value
    saveNotes(notes)
})
// remove note button:
document.querySelector('#remove-note').addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign("/JS_Udemy/notes-app/notes-app-final/index.html")
})