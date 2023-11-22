import {createHtmlExpense} from "./expenseHtml.js";
import {IExpense} from "./expenses.js";
import {getExpenses} from "./expensesRepo.js";

function displayExpenses() : void{
    let expenses : IExpense[] = getExpenses();
    let expensesWrapper = document.getElementById('expensesWrapper')! as HTMLDivElement;
    expensesWrapper.innerHTML="";

    for(let expense of expenses){

        expensesWrapper.appendChild(createHtmlExpense(expense.id.toString(),expense.title, expense.amount.toString()));
    }
}

export {displayExpenses}

