// sortTodos: Sort the array
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

// filterTodos: filter todos based on search text & completedness
const filterTodos = function (todos, filters){
    const filteredTodos = todos.filter(function (todo){
        // filter todos that contain the search text
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase()) //boolean
        // filters todos when the hideCompleted box is checked (true) or todo is incompleted
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed //boolean
        return searchTextMatch && hideCompletedMatch
    })
    return filteredTodos
}

// renderSummary: print out the todos summary
const renderSummary = function (todos, filters){
    // filter out the incompleteTodos
    const incompleteTodos = todos.filter( function (todo) {
        return !todo.completed
    })
    const summary = document.querySelector('#summary')
    if (filters.hideCompleted){
       //print the summary of # of incomplete todos if hideCompleted checked
        summary.textContent = `You have ${incompleteTodos.length} incomplete todos:` 
    } else {
        summary.textContent = `You have ${todos.length} todos in total:`
    }
    
}

// generateTodoDOM: generate Todo DOM to store the Todo List
const generateTodoDOM = function (filteredTodos){
    // Clear the previous todo list in the div
    document.querySelector('#search-result').innerHTML = ''
    // Print on screen the filtered result:
    filteredTodos.forEach(function (todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#search-result').appendChild(p)
    })
}

// renderTodos: filter & print only the todos that contain the searchtext and/or incomplete
const renderTodos = function (todos,filters){
    // filter todos based on search text & completedness
    const filteredTodos = filterTodos(todos,filters) 
    // print out the todos summary
    renderSummary(todos, filters)
    // print out the todos list:
    generateTodoDOM(filteredTodos)
}

//getSavedTodos: get todos list from local storage
const getSavedTodos = function (){
    // Read the local storage
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null){
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// saveTodos: store updated todos list to local storage
const saveTodos = function (todos){
    //Save an updated todos array to the local storage
    localStorage.setItem('todos', JSON.stringify(todos))
}