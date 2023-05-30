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
// // Link the JS file to the html file
// const ps = document.querySelectorAll('p')
// // If the paragraph contains 'the', remove
// ps.forEach(function(p){
//     if (p.textContent.includes('the')) {
//         console.log(p.textContent) //print in console
//         p.remove()
//     }
// })

// Print a summary: you have 2 todos left
// const getSummary = function(todos){
//     let incompleteNum = 0
//     todos.forEach(function(todo){
//         if (!todo.completed){
//             incompleteNum ++
//         }
//     })
//     return `You have ${incompleteNum} todos left`
// }

// Second way to filter out the incompleteTodos
const incompleteTodos = todos.filter( function (todo) {
    return !todo.completed
})
//(1) create element
const summary = document.createElement('p')
//(2) create content
summary.textContent = `You have ${incompleteTodos.length} todos left:`
//(3) append to the body tag
document.querySelector('body').appendChild(summary)

// Sort the arrays:
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

sortTodos(todos)
console.log(todos)
// Add a p for each todo above
todos.forEach(function(todo){
    //(1) create element
    const p = document.createElement('p')
    //(2) create content
    if (!todo.completed){
        p.textContent = `${todo.text} - incomplete`
    } else {
        p.textContent = `${todo.text} - needs action`
    }
    
    //(3) append to the body tag
    document.querySelector('body').appendChild(p)
})

//Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e){
    console.log('Add a new todo...')
})