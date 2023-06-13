const products = [{name: 'Computer mouse'}]
const product = products[0]

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN (Not a Number)
// Truthy values - true, numbers other than 0, string, etc.
if (product) { //instead of if (product !== undefined)
    console.log('Product found')
} else {
    console.log('Product not found')
}