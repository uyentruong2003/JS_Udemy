// ----------------------------------------------
// THROWING & CATCHING ERRORS:
const getTip = (amount) => {
    if (typeof amount === 'number'){
        return amount *.25
    } else { //if not a number, throw an error message
        throw Error('Argument must be a number')
    }
}

// Use try-catch to run alternative codes when an error occurs 
try {
    const result = getTip(true)
    console.log(result)
}catch(e) { //if try has error, do catch
    console.log('catch block is running')
}

// Challenge:
const gradeCalc = (score, totalScore) =>{
    if (typeof score === 'number' && typeof totalScore === 'number') {
        const percent = (score/totalScore)*100
        let letterGrade = ''
        if (percent >= 90) {letterGrade = 'A'}
        else if (percent >= 80) {letterGrade = 'B'}
        else if (percent >= 70) {letterGrade = 'C'}
        else if (percent >= 60) {letterGrade = 'D'}
        else {letterGrade = 'F'}
        return `Your grade: ${letterGrade}`
    } else {
        throw "Scores must be number"
    }
}

try {
    const grade = gradeCalc(98, 100)
    console.log(grade)
} catch (e){
    console.log('Please re-enter a different number and retry')
}

