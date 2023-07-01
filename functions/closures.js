// ----------------------------------------------
// CLOSURE:
// Example1:
// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () => {
//         console.log(message)
//     }
// // return a function
//     return printMessage
// }
// const myPrintMessage = myFunction()
// myPrintMessage()

// Example2:
const createCounter = () => {
    let count = 0

    // return an obj of methods
    return {
        increment() {
            count ++
        },
        decrement() {
            count --
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.get())

// Example3:
// Another pattern used: 
// Couriering- turning a function that takes multiple arguments into 
// multiple functions that take subsets of arguments

const normalAdd = (a,b) => a+b
// couriering:
const adder = (a) =>{
    return (b)=>{
        return a+b
    }
}

const addTo100 = adder(100)
console.log(addTo100(10))
console.log(addTo100(-2))

const addTo40 = adder(40)
console.log(addTo40(1))
console.log(addTo40(12))

// Challenge:

const createTipper = (bill) =>{
    return (tipRate)=>{
        return bill+bill*tipRate
    }
}

const myBill = createTipper(100)
console.log(`10% tip: ${myBill(.10)}`)
console.log(`15% tip: ${myBill(.15)}`)
console.log(`20% tip: ${myBill(.20)}`)
