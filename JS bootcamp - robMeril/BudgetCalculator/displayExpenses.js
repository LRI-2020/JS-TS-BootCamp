import { createHtmlExpense } from "./expenseHtml.js";
class expense {
    constructor(id, title, amount) {
        this._id = id;
        this._title = title;
        this._amount = amount;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
function getExpenses() {
    let rawExpenses = localStorage.getItem("expenses") === null ? Array() : JSON.parse(localStorage.getItem("expenses"));
    let expenses = [];
    for (let item of rawExpenses) {
        let currentExpense = item;
        expenses.push(new expense(item.id, currentExpense.title, currentExpense.amount));
    }
    return expenses;
}
function displayExpenses() {
    let expenses = getExpenses();
    let expensesWrapper = document.getElementById('expensesWrapper');
    for (let expense of expenses) {
        expensesWrapper.appendChild(createHtmlExpense(expense.id.toString(), expense.title, expense.amount.toString()));
    }
}
export { displayExpenses };
