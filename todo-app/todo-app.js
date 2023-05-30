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
const getSummary = function(todos){
    let incompleteNum = 0
    todos.forEach(function(todo){
        if (!todo.completed){
            incompleteNum ++
        }
    })
    return `You have ${incompleteNum} todos left`
}

console.log(getSummary(todos))
//(1) create element
const summary = document.createElement('p')
//(2) create content
summary.textContent = getSummary(todos)
//(3) append to the body tag
document.querySelector('body').appendChild(summary)


// Add a p for each todo above
todos.forEach(function(todo){
    //(1) create element
    const newParagraph = document.createElement('p')
    //(2) create content
    newParagraph.textContent = `${todo.text} - complete status: ${completed}`
    //(3) append to the body tag
    document.querySelector('body').appendChild(newParagraph)
})