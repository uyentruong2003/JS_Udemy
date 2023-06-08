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
        // each todo container
        const container = document.createElement('div')
        // each todo remove button
        const removeButton = document.createElement('button')
        removeButton.textContent = 'x'
        removeButton.addEventListener('click', function(){
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos,filters)
        })
        //each todo checkbox
        const completeCheckbox = document.createElement('input')
        completeCheckbox.setAttribute('type','checkbox')
        // auto check the box if it is completed
        completeCheckbox.checked = todo.completed
        completeCheckbox.addEventListener('change', function(e){
            manipulateCheckTodos (todo.id)
            renderTodos(todos, filters)
            saveTodos(todos)
        })
        
        
        //each todo content
        const content = document.createElement('span')
        content.textContent = todo.text
        document.querySelector('#search-result').appendChild(content)

        //add to container
        container.appendChild(removeButton)
        container.appendChild(content)
        container.appendChild(completeCheckbox)
        document.querySelector('#search-result').appendChild(container)
        
    })
}

// modify the complete property:
const manipulateCheckTodos = function (id){
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if (todo != undefined){
        todo.completed = !todo.completed
    }
}

// remove a todo from the list:
const removeTodo = function (id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (todoIndex > -1) todos.splice(todoIndex,1)
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