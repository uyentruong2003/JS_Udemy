const todo = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']
console.log (`You have ${todo.length} todos!`)
console.log(todo)

// Delete the 3rd item:
todo.splice(2,1)

// Add the new item onto the end
todo.push('Do the dishes')

// Remove the first item from the list
todo.shift()

console.log(todo)

console.log (`You have ${todo.length} todos!`)

// Loop thru the array and print out each item:
todo.forEach(function(item, index){
    console.log(`${index+1}. ${item}`)
})

// Using For Loop instead:
for (let i = 0; i < todo.length; i++){
    console.log(`${i+1}. ${todo[i]}`)
}

