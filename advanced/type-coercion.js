// ----------------------------------------------
// TYPE COERCION

// Type coercion: if we conduct operations between variables of different types,
    //JS will automatically try it best to guess and coerce the operation into one type

console.log('5'+5) //print 55- JS opts the string context
console.log('5'-5) //print 0- JS opts the number context
// Type Coercion - a string, a number, or a boolean (truthy/falsy); 
    // type coercion for string and number is inconsistent and not reccommended
console.log(5=='5') //print true even tho it's different type
console.log(5==='5')// print false
console.log(true + 12) //print 13
//check type of a variable:
console.log(typeof 123)