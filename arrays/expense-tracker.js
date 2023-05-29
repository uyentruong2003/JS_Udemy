const account = {
    name: 'Uyen Truong',
    expenses: [],
    incomes: [],
    // .addExpense() --> add obj expense {description, amount} to the expenses arr
    addExpense: function (description, amount){
        // create an object:
        const expense = {
            description: description,
            amount: amount
        }
        // push to the array
        this.expenses.push(expense)
    },
    //.addIncome() --> exactly the same as .addExpense(), but shortened a bit
    addIncome: function (description, amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        // Calc the total expenses:
        let totalExpenses = 0
        this.expenses.forEach( function (expense){
            totalExpenses += expense.amount
        })

        // Calc the total incomes:
        let totalIncomes = 0
        this.incomes.forEach( function (income){
            totalIncomes += income.amount
        })

        let balance = totalIncomes - totalExpenses
        return `${this.name} has a balance of $${balance}, with $${totalIncomes} in incomes, and $${totalExpenses} in expenses.`
    }
}

// Expense --> description, amount
// .addExpense() --> description, amount
// .getAccountSummary() --> total up all expenses --> Uyen Truong has $200 in expenses

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Scholarship', 1000)
account.addIncome('Internship', 2000)
console.log(account)
console.log(account.getAccountSummary())