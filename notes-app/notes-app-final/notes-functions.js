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
    const divLine = document.createElement('p')
    const noteContainer = document.createElement('div')
    const title = document.createElement('h5')
    const body = document.createElement('p')
    const removeButton = document.createElement('button')
    
    // note: for inline text tag, use 'span'
    removeButton.textContent = 'Remove'
    divLine.textContent = '---'

    // create conent for the element
    if (note.title.length > 0 && note.body.length > 0){
        title.textContent = note.title
        body.textContent = note.body
    } else if (note.title.length > 0){ // just title, no body
        title.textContent = note.title
        body.textContent = 'No Content'
    } else if (note.body.length > 0){
        title.textContent = 'Unnamed Note' // just body, no title
        body.textContent = note.body
    } else {
        title.textContent = 'N/A'
        body.textContent = 'N/A'
        
    }
    // add to screen
    noteContainer.appendChild(title)
    noteContainer.appendChild(body)
    noteContainer.appendChild(removeButton)
    noteContainer.appendChild(divLine)
    document.querySelector('#notes').appendChild(noteContainer)
}

// Save notes:
const saveNotes = function (notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Render the notes:
const renderNotes = function (notes, filters){
    // function to filter notes by search
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Clear the previous notes list:
    document.querySelector('#notes').innerHTML = ''

    // function to print each note on screen
    filteredNotes.forEach(function (note){
        // generate DOM (create element & assign content)
        generateNoteDOM(note)
    })

}

// Render note summary:
const renderSummary = function (notes){
    const noteSum = document.querySelector('#note-summary')
    noteSum.textContent = `You have ${notes.length} notes in total`
}