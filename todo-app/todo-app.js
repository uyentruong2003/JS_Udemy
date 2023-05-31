const todos = [{
    text: 'Order cat food',
    completed: true
},{
    text: 'Clean kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: false
},{
    text: 'Do work',
    completed: true
},{
    text: 'Exercise',
    completed: true
}]

// get summary:
const getSummary = function (todos){
    // filter out the incompleteTodos
    const incompleteTodos = todos.filter( function (todo) {
        return !todo.completed
    })
    //query the element & add content
    const summary = document.querySelector('#summary')
    summary.textContent = `You have ${incompleteTodos.length} todos left:`
}

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

// FUNCTION: Add a p for each todo in array
const displayTodos = function (todos){
    getSummary(todos) // print the summary first
    //clear the search result
    document.querySelector('#search-result').innerHTML = ''
    todos.forEach(function(todo){
        //(1) create element
        const p = document.createElement('p')
        //(2) create content
        if (!todo.completed){
            p.textContent = `${todo.text} - incomplete`
        } else {
            p.textContent = `${todo.text} - completed`
        }
        //(3) append to the body tag
        document.querySelector('#search-result').appendChild(p)
    })
}

// OBJECT: Create an object to hold the search text
const search = {
    searchText: ''
}
// FUNCTION: filter out the todos that contain the searchtext
const renderTodos = function (todos,search){
    getSummary(todos) //update the summary
    const filteredResult = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(search.searchText.toLowerCase())
    })
    // Clear the previous search in the div
    document.querySelector('#search-result').innerHTML = ''
    // Print on screen the filtered result:
    filteredResult.forEach(function (todo){
        const p = document.createElement('p')
        if (!todo.completed){
            p.textContent = `${todo.text} - incomplete`
        } else {
            p.textContent = `${todo.text} - completed`
        }
        document.querySelector('#search-result').appendChild(p)
    })
}

// OFFICIAL PROGRAM:
sortTodos(todos)
displayTodos(todos)

//Search Handling:
document.querySelector('#search-todo').addEventListener('input', function (e){
    search.searchText = e.target.value
    renderTodos(todos, search)
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
    // sort the array (so the incomplete todos come first)
    sortTodos(todos)
    // re-display todos
    renderTodos(todos,search)
})

