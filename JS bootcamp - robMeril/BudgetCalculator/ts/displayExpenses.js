import { createHtmlExpense } from "./expenseHtml.js";
import { getExpenses } from "./expensesRepo.js";
function displayExpenses() {
    let expenses = getExpenses();
    let expensesWrapper = document.getElementById('expensesWrapper');
    expensesWrapper.innerHTML = "";
    for (let expense of expenses) {
        expensesWrapper.appendChild(createHtmlExpense(expense.id.toString(), expense.title, expense.amount.toString()));
    }
}
export { displayExpenses };
