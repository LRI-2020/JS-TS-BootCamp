
let expenseHtmlTemp =`<div class="expenses_info mx-2">
    <h4 class="expense_title"></h4>
        <h5 class="amount"></h5>
</div>
<div class="expense_actions d-inline-flex">
<button class="btn btn-light p-0 w-50 mx-1 updateBtn">
<img class="update w-50" src="./img/update.svg" alt="updateIcon">
    </button>                   
    <button class="btn btn-light w-50 p-0 mx-1 deleteBtn">
<img class="delete w-50" src="./img/delete.svg" alt="deleteIcon">
    </button>
 </div>`;

function createHtmlExpense(id:string,title:string, amount:string) : HTMLDivElement{
   
    let expense = generateExpenseDiv();
    let titleEl = expense.querySelector('.expense_title')! as HTMLTitleElement;
    let amountEl = expense.querySelector('.amount')! as HTMLTitleElement;
    let updateEl = expense.querySelector('.expense_actions>.updateBtn')!
    updateEl.setAttribute('expense_id',id);    
    let deleteEl = expense.querySelector('.expense_actions>.deleteBtn')!
    deleteEl.setAttribute('expense_id',id);
    titleEl.innerText = title;
    amountEl.innerText = amount;
    return expense; 
}

function generateExpenseDiv(): HTMLDivElement{
    let expense = document.createElement('div');
    expense.classList.add("expense","d-inline-flex","align-items-center","shadow","p-3", "my-2");
    expense.innerHTML = expenseHtmlTemp;
    return expense;
}

export {createHtmlExpense}
