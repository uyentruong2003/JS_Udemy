let todos = [{
    text: 'Order cat food',
    completed: true
},{
    text: 'Clean kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: true
}]

// FUNCTION: Sort the array
const sortTodos = function (todos){
    const sorted = todos.sort(function (a,b){
        if (!a.completed && b.completed){
            return -1
        } else if (a.completed && !b.completed){
            return 1
        } else{
            return 0
        }
    })
}


// OBJECT: Create an object to hold the search text
const filters = {
    searchText: '',
    hideCompleted: false
}


// FUNCTION: filter & print only the todos that contain the searchtext and/or incomplete
const renderTodos = function (todos,search){

    // function to filter todos based on search text & completedness
    const filteredTodos = todos.filter(function (todo){
        // filter todos that contain the search text
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        // filter todos that incompleted
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // filter out the incompleteTodos
    const incompleteTodos = todos.filter( function (todo) {
        return !todo.completed
    })
    //print the summary of # of incomplete todos
    const summary = document.querySelector('#summary')
    summary.textContent = `You have ${incompleteTodos.length} todos left:`

    // Clear the previous todo list in the div
    document.querySelector('#search-result').innerHTML = ''
    // Print on screen the filtered result:
    filteredTodos.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#search-result').appendChild(p)
    })
}

// OFFICIAL PROGRAM:
// Read the local storage
const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null){
    todos = JSON.parse(todosJSON)
}

sortTodos(todos)
// displayTodos(todos)
renderTodos(todos)

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
        text: e.target.elements.newTodo.value,
        completed: false
    }
    //add to the array
    todos.push(newTodo)
    e.target.elements.newTodo.value = '' //clear input
    //Save an updated todos array to the local storage
    localStorage.setItem('todos', JSON.stringify(todos))
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