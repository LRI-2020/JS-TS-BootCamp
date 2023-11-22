import { createExpense } from "./createExpense.js";
import { updateExpense } from "./updateExpense.js";
import { displayExpenses, displayTotal } from "./displayExpenses.js";
import { deleteExpense } from "./deleteExpense.js";
// let createExpenseForm = document.querySelector('form.add_expense_form')! as HTMLFormElement;
function startAllListeners() {
    displayCreateForm();
    CheckAmountFieldListener();
    createExpenseListener();
    updateExpenseListener();
    saveExpenseListener();
    exitBtnListener();
    deleteExpenseListener();
    deleteAllListener();
}
function displayCreateForm() {
    let addNewExpenseBtn = document.querySelector('.add_expense');
    //Display form when create expense is clicked
    addNewExpenseBtn.addEventListener('click', () => {
        //Display Form
        let add_expense_Wrapper = document.querySelector('div.add_expense_Wrapper');
        add_expense_Wrapper.classList.remove('d-none');
    });
}
function isValidInput(value, pattern) {
    let regex = new RegExp(pattern, 'g');
    return regex.test(value);
}
function CheckAmountFieldListener() {
    let newAmountInput = document.getElementById('new_expense_amount');
    //Validate form field
    newAmountInput.addEventListener('keyup', function () {
        if (!isValidInput(newAmountInput.value, newAmountInput.getAttribute('pattern'))) {
            newAmountInput.setAttribute('has-error', "true");
        }
        else {
            newAmountInput.setAttribute('has-error', "false");
        }
    });
}
function exitBtnListener() {
    let exitBtns = document.querySelectorAll('button.exit');
    for (let btn of exitBtns) {
        btn.addEventListener('click', function () {
            let idToClose = btn.getAttribute('to-close');
            let elToClose = document.getElementById(idToClose);
            elToClose.classList.add('d-none');
        });
    }
}
function createExpenseListener() {
    let createExpenseBtn = document.querySelector('button.create_expense');
    createExpenseBtn.addEventListener('click', function () {
        let newAmountInput = document.getElementById('new_expense_amount');
        let new_expense_title_input = document.getElementById('new_expense_title');
        //check if all valid
        if (isValidInput(newAmountInput.value, newAmountInput.getAttribute('pattern'))
            && new_expense_title_input.value !== null
            && new_expense_title_input.value !== undefined
            && new_expense_title_input.value.length > 0) {
            createExpense(new_expense_title_input.value, parseFloat(newAmountInput.value));
        }
        else {
            alert('an error occurred, expense cannot be  created.');
        }
    });
}
function makeExpenseEditable(id) {
    let titleEl = document.querySelector('h4.expense_title[expense_id=' + '"' + id.toString() + '"' + ']');
    let amountEl = document.querySelector('h5.expense_amount[expense_id=' + '"' + id.toString() + '"' + ']');
    let saveBtn = document.querySelector('button.save_expense_btn[expense_id=' + '"' + id.toString() + '"' + ']');
    if (titleEl !== undefined || amountEl !== undefined) {
        titleEl.setAttribute('contenteditable', "true");
        amountEl.setAttribute('contenteditable', "true");
        saveBtn.classList.remove('d-none');
    }
    else {
        alert('cannot edit the expense');
    }
}
function updateExpenseListener() {
    let updateBtns = document.querySelectorAll('button.updateBtn');
    for (let btn of updateBtns) {
        btn.addEventListener('click', function () {
            let id = Number(btn.getAttribute('expense_id'));
            makeExpenseEditable(id);
            btn.classList.add("d-none");
        });
    }
}
function saveExpenseListener() {
    let saveBtns = document.querySelectorAll('button.save_expense_btn');
    for (let btn of saveBtns) {
        btn.addEventListener('click', function () {
            let id = (btn.getAttribute('expense_id')) !== undefined ? Number(btn.getAttribute('expense_id')) : -1;
            let titleEl = document.querySelector('h4.expense_title[expense_id=' + '"' + id.toString() + '"' + ']');
            let amountEl = document.querySelector('h5.expense_amount[expense_id=' + '"' + id.toString() + '"' + ']');
            if (((amountEl === null || amountEl === void 0 ? void 0 : amountEl.innerText)
                && (titleEl === null || titleEl === void 0 ? void 0 : titleEl.innerText)
                && amountEl.getAttribute('pattern') !== null
                && amountEl.getAttribute('pattern') !== undefined)) {
                if (isValidInput(amountEl.innerHTML, amountEl.getAttribute('pattern'))) {
                    let updateRes = updateExpense(id, titleEl.innerText, Number(amountEl.innerText));
                    if (!updateRes) {
                        alert('an error has occurred, expense not updated');
                    }
                    refreshExpenses();
                }
            }
            btn.classList.add("d-none");
        });
    }
}
function refreshExpenses() {
    displayExpenses();
    displayTotal();
    CheckAmountFieldListener();
    updateExpenseListener();
    saveExpenseListener();
    exitBtnListener();
    deleteExpenseListener();
}
function deleteExpenseListener() {
    let deleteBtns = document.querySelectorAll('button.deleteBtn');
    for (let btn of deleteBtns) {
        btn.addEventListener('click', function () {
            let id = (btn.getAttribute('expense_id')) !== undefined ? Number(btn.getAttribute('expense_id')) : -1;
            if (id > -1) {
                let delRes = deleteExpense(id);
                if (!delRes) {
                    alert('an error occurred, expense not deleted');
                }
                else {
                    refreshExpenses();
                }
            }
        });
    }
}
function deleteAllListener() {
    let deleteAllBtn = document.querySelector('button.delete_all_expenses');
    deleteAllBtn.addEventListener('click', function () {
        localStorage.clear();
        refreshExpenses();
    });
}
export { startAllListeners, refreshExpenses };
