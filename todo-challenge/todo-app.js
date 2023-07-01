// OBJECT: Create an object to hold the search text
const filters = {
    searchText: '',
    hideCompleted: false
}


// OFFICIAL PROGRAM:
let todos = getSavedTodos()
'use strict' //help with debugging

sortTodos(todos)
renderTodos(todos, filters)

// debugger //breakpoint to debug

//Search Handling:
document.querySelector('#search-todo').addEventListener('input', function (e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Form Handling:
document.querySelector('#new-todo-form').addEventListener('submit', function (e){
    e.preventDefault() //clear default reaction
    //create an object for the new todo
    let newTodo = {
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    }
    console.log(newTodo)
    //add to the array
    todos.push(newTodo)
    e.target.elements.newTodo.value = '' //clear input
    // save the updated todos
    saveTodos(todos)
    // sort the array (so the incomplete todos come first)
    sortTodos(todos)
    // re-display todos
    renderTodos(todos,filters)
})

// Checkbox Handling:
document.querySelector('#hide-completed').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})