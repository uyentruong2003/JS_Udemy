// CALL BACK: get the data from this function & plug it into the callback function created in app.js
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()
    request.open('GET','http://puzzle.mead.io/puzzle')
    request.send()

    // Event listener to add event when the the request is done (response is received)
    request.addEventListener('readystatechange',(e) =>{
        //readyState: check which state the HTTP operation on request is at; 4 is done
        if(e.target.readyState === 4 && e.target.status === 200){
            data = JSON.parse(e.target.responseText)
            //plug the data into the call back function in the app.js
            callback(undefined,data.puzzle)
        } else if (e.target.readyState === 4){
            callback("An error has occurred", undefined)
        }
    })
}