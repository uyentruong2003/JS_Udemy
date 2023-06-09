const noteId = location.hash.substring(1) //exclude the hash
let notes = getSavedNotes()
let note = notes.find(function (note){
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

// Syncing across pages:
window.addEventListener('storage', function (e){ // when the storage is changed
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue) //update with the latest data
        //find the note from the list
        note = notes.find(function (note){
            return note.id === noteId
        })
        
        //if not exist, re-direct to Home
        if (note === undefined) {
            location.assign("/JS_Udemy/notes-app/notes-app-final/index.html")
        }
        // if exists, re-assign the note title & body
        noteTitle.value = note.title
        noteBody.value = note.body
        
    }
})