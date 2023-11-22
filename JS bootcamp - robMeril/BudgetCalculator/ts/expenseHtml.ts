
let expenseHtmlTemp =`<div class="expenses_info mx-2">
    <h4 class="expense_title" pattern="^\\d*(\\.\\d{0,2})?$"></h4>
    <h5 class="expense_amount" pattern="^\\d*(\\.\\d{0,2})?$"></h5>
</div>
<div class="expense_actions d-inline-flex">
<button class="btn btn-light p-0 w-50 mx-1 save_expense_btn d-none">Save</button> 
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
    titleEl.setAttribute('expense_id',id.toString());
    titleEl.innerText = title;
   
    let amountEl = expense.querySelector('.expense_amount')! as HTMLTitleElement;
    amountEl.setAttribute('expense_id',id.toString());
    amountEl.innerText = amount;
    
    let updateEl = expense.querySelector('.expense_actions>.updateBtn')!
    updateEl.setAttribute('expense_id',id);  
    
    let deleteEl = expense.querySelector('.expense_actions>.deleteBtn')!
    deleteEl.setAttribute('expense_id',id);   
    
    let saveEl = expense.querySelector('button.save_expense_btn')!
    saveEl.setAttribute('expense_id',id);

    return expense; 
}

function generateExpenseDiv(): HTMLDivElement{
    let expense = document.createElement('div');
    expense.classList.add("expense","d-inline-flex","align-items-center","shadow","p-3", "my-2", "justify-content-between");
    expense.innerHTML = expenseHtmlTemp;
    return expense;
}

export {createHtmlExpense}
