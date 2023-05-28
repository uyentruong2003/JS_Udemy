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

// An array of objects --> text, completed
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
// (1) Create a function to update status to 'completed'
const completeToDo = function (todos, text){
    // find the index of the todo of which the text = the given text
    const index = todos.findIndex( function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
     // Only proceed when the task is found:
     if(index > -1){
        // Check if status is completed:
        todos[index].completed = true
    } else{
        console.log("The task does not exist!")
    }
    
}
// (2) Create a function to remove a todo by text value

const removeToDo = function (todos, text){
    // find the index of the todo of which the text = the given text
    const index = todos.findIndex( function (todo, index) {
        return todo.text.toLowerCase() === text.toLowerCase()
    })
    
    // Only proceed when the task is found:
    if(index > -1){
        // Check if status is completed:
        if (todos[index].completed === true){
            // remove the todo at the found index
            todos.splice(index, 1)
        } else {
            console.log("The task hasn't been completed")
        }
    } else{
        console.log("The task does not exist!")
    }
    
}

// console.log(todos)
// // complete Buy food
// completeToDo(todos, 'Buy food')
// // remove Buy food
// removeToDo (todos, 'Buy food')
// console.log(todos)

// (3) Create a function to filtered the todos based on complete status
const filterToDo = function (todos, completed){
     const filtered = todos.filter(function (todo, item){
        // filter only the todos that have complete status as desired
        return todo.completed === completed
     })
     return filtered
}

console.log(todos)
// filter only completed todos
let completed = filterToDo(todos, true)
console.log(completed)
// filter only incompleted todos
let needAction = filterToDo(todos, false)
console.log(needAction)
