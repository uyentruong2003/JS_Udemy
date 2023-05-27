// const todo = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
// console.log (`You have ${todo.length} todos!`)
// console.log(todo)

// // Delete the 3rd item:
// todo.splice(2,1)

// // Add the new item onto the end
// todo.push('Do the dishes')

// // Remove the first item from the list
// todo.shift()

// console.log(todo)

// console.log (`You have ${todo.length} todos!`)

// // Loop thru the array and print out each item:
// todo.forEach(function(item, index){
//     console.log(`${index+1}. ${item}`)
// })

// // Using For Loop instead:
// for (let i = 0; i < todo.length; i++){
//     console.log(`${i+1}. ${todo[i]}`)
// }

// 1. An array of objects --> text, completed
const todos = [{
    text: 'Order cat food',
    completed: false
},{
    text: 'Clean kitchen',
    completed: false
},{
    text: 'Buy food',
    completed: false
},{
    text: 'Do work',
    completed: false
},{
    text: 'Exercise',
    completed: false
}]
// 2. Create a function to remove a todo by text value
const completeToDo = function(todos, text){
    // find the index of the specified text in the array:
    const index = todos.find( function (todo, index){
        return todo.text === text
    })
    // change complete status to true
    todos[index].completed = true
}

