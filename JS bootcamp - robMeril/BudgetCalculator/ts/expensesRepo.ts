import {Expense, IExpense} from "./expenses.js";

function getExpenses() : IExpense[] {

    let rawExpenses : any[] = localStorage.getItem("expenses") === null?Array():JSON.parse(localStorage.getItem("expenses")!);
    let expenses : Expense[] = [];

    for(let item of rawExpenses){

        let currentExpense = item as IExpense;
        expenses.push(new Expense(item.id,currentExpense.title, currentExpense.amount));
    }

    return expenses;
}

export {getExpenses}