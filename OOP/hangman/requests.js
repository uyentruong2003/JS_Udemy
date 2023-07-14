// // ----------------------------------------------
// // CALLBACK FUNCTION: Pass the function from app.js into this getPuzzle function
// // This is an example of ASYNCHRONOUS EXECUTION
// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest()
//     request.open('GET',`https://puzzle.mead.io/puzzle`)
//     request.send()

//     // Pass in callback function --> Asynchronous execution
//     request.addEventListener('readystatechange',(e) =>{
//         //readyState: check which state the HTTP operation on request is at; 4 is done
//         if(e.target.readyState === 4 && e.target.status === 200){
//             data = JSON.parse(e.target.responseText)
//             //plug the data into the call back function in the app.js
//             callback(undefined,data.puzzle)
//         } else if (e.target.readyState === 4){
//             callback("An error has occurred", undefined)
//         }
//     })
// }
// // ----------------------------------------------
// // ASYNCHRONOUS VS. SYNCHRONOUS EXECUTION
// // Asynchronous: the next steps will still be executed even though the request hasn't been done processing
// // Synchronous: the next, unrelated steps will not be executed until the request is done
// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest()
//     // FALSE- indicating that the program will not continue until the request is done
//     request.open('GET','https://puzzle.mead.io/puzzle', false)
//     request.send()

//     // NOT using eventlistener for the request ==> it will be synchronous execution
//     if (request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4){
//         throw new Error ("Things didn't go well")
//     }
// } 

// // ----------------------------------------------
// // PROMISE: replacing callbacks to operate asynchronous execution --> simpler & neater codes
// const getPuzzlePromise = (wordCount) => new Promise ((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.open ('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()

//     request.addEventListener('readystatechange',(e) =>{
//         if (e.target.readyState === 4 && e.target.status === 200){
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4){
//             reject('Promise error')
//         }
//     })
// })

// // ----------------------------------------------
// // FETCH API
// // Instead of creating an XMLHTTPRequest & a Promise, using fetch 
// // integrates the 2 & shorten the codes
// const fetchPuzzle = (wordCount) => {
//     return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
//     // check if the request is successful --> convert to json obj & return as a Promise
//     .then((response) => {
//         if (response.ok){
//             return response.json()
//         } else { // if error, throw a new error
//             throw new Error('Fetch error occurred')
//         }
//     })
//     // access the data in the response & return
//     .then ((data) => {
//         return data.puzzle
//     })
// } // continue codes in apps to print in console if the data is available

// //stand-alone fetch (no following codes in app.js)
// fetch('https://puzzle.mead.io/puzzle?wordCount=2', {}).then((response) => {
//     if (response.status===200) {
//         return response.json()
//     }else {
//         throw new Error ('Unable to fetch the puzzle')
//     }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })

// ----------------------------------------------
// ASYNC-AWAIT
// An alternative for promise chaining
const getPuzzleAsync = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,{})
    if (response.ok) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error ('Unable to async-await')
    }
}