const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num*2) : reject('Number must be provided')
    },2000)
})

// Earlier Promise chaining example
getDataPromise(2).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log(`Promise data: ${data}`)
}, (err) => {
    console.log(err)
})

// ASYNC-AWAIT
// An alternative to promise chaining
const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    return data
}


processData().then((data) => {
    console.log(`Async-Await Data: ${data}`)
} ).catch((error) => {
    console.log('Error:', error)
})