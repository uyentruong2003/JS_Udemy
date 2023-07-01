const getDataCallback = (callback) =>{
    // setTimeout(what_to_do, time_wait): Wait some time 
    // before executing the action specified
    setTimeout(()=>{
        callback(undefined, 'This is the data')
        callback('This is the error', undefined)
    },2000)
}

getDataCallback((error,data)=>{
    if (error){
        console.log(`Error: ${error}`)
    } else {
        console.log(data)
    }
})

// Using Promise instead:
// resolve: if everything went well
// reject: if everything went bad

// Promise: a shorter way in replacement for callback function to do
// asynchronous programming
const getDataPromise= (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`This is my success data: ${data}`)
            // reject('this is the promise error')
        },2000)    
    })
}
const myPromise = getDataPromise(123)

// this function below will be run when it is 'RESOLVE'
myPromise.then((data) => {
    console.log(data)
// this function below will be run when it is 'REJECT'
}, (error) =>{
    console.log(error)
})

