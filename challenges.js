const account = {
    name: 'Sudhara D',
    expenses: [],
    income: [],
    addExpenses: function(title, expense) {
        this.expenses.push({
            description: title,
            expense: expense
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach(function(note) {
            totalExpenses = note.expense + totalExpenses
        })
        this.income.forEach(function(note) {
            totalIncome = note.amount + totalIncome
        })
        return `${this.name} has a balance of $${totalIncome-totalExpenses}. $${totalIncome} in income. $${totalExpenses} in expenses.`
    }
}

account.addIncome('Salary', 2000)
account.addExpenses('Rent', 950)
account.addExpenses('Coffee', 2)
account.addExpenses('Chocalate', 5)
account.addExpenses('Rice', 35)
account.addExpenses('Fish', 17)
account.addExpenses('Neckless', 100)
console.log(account.getAccountSummary())