// Read existing notes from local storage:
const getSavedNotes = function (){
    //get JSON notes from local storage
    const notesJSON = localStorage.getItem('notes')
    // If not null, convert JSON back to array & return. 
    // Else, return empty array
    if (notesJSON !== null){
        return JSON.parse(notesJSON)
    } else{
        return []
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note){
    //create element
    const p = document.createElement('p')
    // create conent for the element
    if (note.title.length > 0){
        p.textContent = note.title
    } else {
        p.textContent = 'Unnamed Note'
    }
    // add to screen
    document.querySelector('#notes').appendChild(p)
}

// Render the notes:
const renderNotes = function (notes, filters){
    // function to filter notes by search
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // function to print each note on screen
    filteredNotes.forEach(function (note){
        // generate DOM & print on screen
        generateNoteDOM(note)
    })

}

// Render note summary:
const renderSummary = function (notes){
    const noteSum = document.querySelector('#note-summary')
    noteSum.textContent = `You have ${notes.length} notes in total`
}