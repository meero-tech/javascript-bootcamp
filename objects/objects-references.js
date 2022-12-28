let myAccount = {
    name : "Andrew Modi",
    expenses : 0,
    income : 0
}
/*
let addExpense = function (account,amount){
    account.expenses = account.expenses + amount 
    console.log(account)
}*/

//addExpense(myAccount, 5)
//console.log(myAccount)

let addIncome = function (account,amount){
    account.income = account.expenses + amount 
    console.log(account)
}

let resetAccount = function (account){
    account.income = 0
    account.expenses = 0
    console.log(account)
}
let getAccountSummary = function (account){
    let summary = `Account for ${account.name} has ${account.income-account.expenses}. ${account.income} in income and ${account.expenses} in expenses`
    console.log(summary)
}
addIncome(myAccount,5)
resetAccount(myAccount)
getAccountSummary(myAccount)