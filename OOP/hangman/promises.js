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
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        //impossible to have 2 resolve/reject line!!!
        // resolve('this is the promise data')
        reject('this is the promise error')
    },2000)
})

// this function below will be run when it is 'RESOLVE'
myPromise.then((data) => {
    console.log(data)
// this function below will be run when it is 'REJECT'
}, (error) =>{
    console.log(error)
})