'use strict' //help with debugging

console.log(data) //data is leaked and accidentally become a global var
// Read existing notes from local storage:
const getSavedNotes = () => {
    //get JSON notes from local storage
    const notesJSON = localStorage.getItem('notes')
    // try-catch used just in case the file in local storage is not JSON
    try {
    // Check if not null, convert JSON back to array & return. 
    // Else, return empty array
    return notesJSON !== null ? JSON.parse(notesJSON) : []
    } catch(e){
        return []
    }
    
}

// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    //create element
    const divLine = document.createElement('p')
    const noteContainer = document.createElement('div')
    const title = document.createElement('a')
    const body = document.createElement('p')
    const removeButton = document.createElement('button')
    const lastEdit = document.createElement('span')
    // note: for inline text tag, use 'span'

    divLine.textContent = '---'

    //Setup the remove note button
    removeButton.textContent = 'Remove'
    removeButton.addEventListener('click', ()=>{
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    // create conent for the elements title & body
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
        title.textContent = 'Unnamed Note'
        body.textContent = 'No content'
        
    }
    title.setAttribute('href',`/JS_Udemy/notes-app/notes-app-final/edit.html#${note.id}`) //the hash has the id of the specific note
    
    // set up the last edit info:
    lastEdit.textContent = `    Last edited ${moment(note.updatedAt).fromNow()}`
    
    // add to screen
    noteContainer.appendChild(title)
    noteContainer.appendChild(lastEdit)
    noteContainer.appendChild(body)
    noteContainer.appendChild(removeButton)
    noteContainer.appendChild(divLine)
    document.querySelector('#notes').appendChild(noteContainer)
}

// Remove a note from the list:
const removeNote = (id) => {
    //return the index of the note you wanna delete
    const noteIndex = notes.findIndex((note)=> note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Save notes:
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

// Render the notes:
const renderNotes = (notes, filters) => {
    // sort notes first:
    sortNotes (filters.sortBy, notes)
    // function to filter notes by search
    const filteredNotes = notes.filter((note) =>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Clear the previous notes list:
    document.querySelector('#notes').innerHTML = ''

    // function to print each note on screen
    filteredNotes.forEach((note) => {
        // generate DOM (create element & assign content)
        generateNoteDOM(note)
    })

}

// Render note summary:
const renderSummary = (notes) => {
    const noteSum = document.querySelector('#note-summary')
    noteSum.textContent = `You have ${notes.length} notes in total`
}

// Sort notes alphabetically:
const sortAlphabetically = (notes) => {
    notes.sort((a,b) => {
        if (a.title<b.title) {
            return -1
        } else if (a.title>b.title){
            return 1
        } else{
            return 0
        }
    })
}

// Sort by Created:
const sortByCreated = (notes) => {
    notes.sort((a,b) => {
        if (a.createdAt > b.createdAt){
            return -1
        } else if (a.createdAt < b.createdAt){
            return 1
        } else{
            return 0
        }
    })
}

// Sort by Updated:
const sortByEdited = (notes) => {
    notes.sort((a,b) => {
        if (a.updatedAt > b.updatedAt){
            return -1
        } else if (a.updatedAt < b.updatedAt){
            return 1
        } else{
            return 0
        }
    })
}

// sort notes by 3 ways:
const sortNotes = (option, notes) => {
    if (option === 'byEdited'){
        sortByEdited(notes)
    } else if (option === 'byCreated'){
        sortByCreated(notes)
    } else if (option === 'alphabetical'){
        sortAlphabetically(notes)
    } else {
        notes = notes
    }
}