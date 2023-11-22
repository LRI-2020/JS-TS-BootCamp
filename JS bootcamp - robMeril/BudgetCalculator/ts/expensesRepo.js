import { Expense } from "./expenses.js";
function getExpenses() {
    let rawExpenses = localStorage.getItem("expenses") === null ? Array() : JSON.parse(localStorage.getItem("expenses"));
    let expenses = [];
    for (let item of rawExpenses) {
        let currentExpense = item;
        expenses.push(new Expense(item.id, currentExpense.title, currentExpense.amount));
    }
    return expenses;
}
export { getExpenses };
