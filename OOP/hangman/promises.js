// const getDataCallback = (callback) =>{
//     // setTimeout(what_to_do, time_wait): Wait some time 
//     // before executing the action specified
//     setTimeout(()=>{
//         callback(undefined, 'This is the data')
//         callback('This is the error', undefined)
//     },2000)
// }

// getDataCallback((error,data)=>{
//     if (error){
//         console.log(`Error: ${error}`)
//     } else {
//         console.log(data)
//     }
// })

// // ----------------------------------------------
// // PROMISE
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


// // ----------------------------------------------
// // PROMISE CHAINING

// Using callbacks instead of promise
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number'){
            callback(undefined, num*2)
        } else {
            callback('Number must be provided')
        }
    },2000)
}
// Callback hell: callback functions are nested within other callbacks several levels deep
// --> hard to understand & maintain codes
getDataCallback(2, (err,data) => {
    if (err){
        console.log(err)
    } else {
        getDataCallback(data, (err,data) => {
            if (err){
                console.log('err')
            } else {
                console.log(data)
            }
        })
    }
})

// Alternatives: way to fix callback hell using promise
const getDataPromiseChaining = (num) => new Promises((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    },2000)
})

// Method 1: using promise BUT still nested & not the best way yet; 
// repeat the function getDataPromiseChaining one more time within itself
getDataPromiseChaining(2).then((data) => {
    getDataPromiseChaining(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err)
})

// Method 2: less nested & most efficient way;
// update the function with new data and 'then' it directly the second time
getDataPromiseChaining(10).then((data) => {
    return getDataPromiseChaining(data)
}).then((data) => {
    console.log(`Promise data: ${data}`)
}, (err) => {
    console.log(err)
}).catch((err) => {
    console.log(err)
})

