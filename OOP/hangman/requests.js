// // ----------------------------------------------
// // CALL BACK FUNCTION: Pass the function from app.js into this getPuzzle function
// // This is an example of ASYNCHRONOUS EXECUTION
// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest()
//     request.open('GET',`http://puzzle.mead.io/puzzle`)
//     request.send()

//     // Event listener to add event when the the request is done (response is received)
//     // AddEventListener + callback function --> Asynchronous
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
//     request.open('GET','http://puzzle.mead.io/puzzle', false)
//     request.send()

//     // NOT using eventlistener for the request ==> it will be synchronous execution
//     if (request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4){
//         throw new Error ("Things didn't go well")
//     }
// } 

// ----------------------------------------------
// PROMISE: 
const getPuzzlePromise = (wordCount) => new Promise ((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open ('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()

    request.addEventListener('readystatechange',(e) =>{
        if (e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4){
            reject('An error occurred')
        }
    })
})

