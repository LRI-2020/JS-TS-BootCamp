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
function displayTotal() {
    let expenses = getExpenses();
    let total = expenses.reduce((acc, ex, i, arr) => acc += ex.amount, 0);
    let totalEl = document.querySelector('.total_expenses_value');
    totalEl.innerText = total.toString() + " Eur";
}
export { displayExpenses, displayTotal };
