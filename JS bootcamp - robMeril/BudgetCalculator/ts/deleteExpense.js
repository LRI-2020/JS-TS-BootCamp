import { getExpenses } from "./expensesRepo.js";
import { storeExpenses } from "./createExpense.js";
function deleteExpense(expenseId) {
    try {
        let expenses = getExpenses();
        let index = expenses.findIndex(e => e.id === expenseId);
        expenses.splice(index, 1);
        return storeExpenses(expenses);
    }
    catch (error) {
        alert('Expense cannot be deleted.');
    }
}
export { deleteExpense };
