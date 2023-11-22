import { Expense } from "./expenses.js";
import { getExpenses } from "./expensesRepo";
import { storeExpenses } from "./createExpense";
function getExpenseById(id) {
    let expenses = getExpenses();
    let expense = expenses.find(e => e.id === id);
    if (expense !== undefined && expense !== null) {
        return expense;
    }
    throw Error("No expense found for id : " + id.toString());
}
function getExpenseIndex(id) {
    let expenses = getExpenses();
    let index = expenses.findIndex(e => e.id === id);
    if (index !== undefined && index !== null) {
        return index;
    }
    throw Error("No expense found for id : " + id.toString());
}
function updateExpense(expenseId, title, amount) {
    try {
        let expenses = getExpenses();
        let index = expenses.findIndex(e => e.id === expenseId);
        expenses[index] = new Expense(expenseId, title, amount);
        storeExpenses(expenses);
    }
    catch (error) {
        alert('Expense cannot be updated.');
    }
}
