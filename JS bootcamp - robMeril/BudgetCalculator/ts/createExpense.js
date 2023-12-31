import { getExpenses } from "./expensesRepo.js";
import { Expense } from "./expenses.js";
function getLastId() {
    let expenses = getExpenses();
    if (expenses.length === 0) {
        return 0;
    }
    return (expenses.reduce((previousValue, currentValue, currentIndex, array) => {
        let res = array.find(e => e.id === Math.max(previousValue.id, currentValue.id));
        if (res === undefined) {
            throw new Error('Last Id not found');
        }
        return res;
    })).id;
}
function createExpense(title, amount) {
    let lastId = getLastId();
    let id = ++lastId;
    let expense = new Expense(id, title, amount);
    console.log(expense.id);
    if (addExpense(expense)) {
        return true;
    }
    console.log("error has occurred, expense not save");
    return false;
}
function storeExpenses(expenses) {
    try {
        localStorage.setItem("expenses", JSON.stringify(expenses));
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
function addExpense(expense) {
    let expenses = getExpenses();
    expenses.push(expense);
    return storeExpenses(expenses);
}
function displayExpenseForm() {
}
export { createExpense, storeExpenses };
