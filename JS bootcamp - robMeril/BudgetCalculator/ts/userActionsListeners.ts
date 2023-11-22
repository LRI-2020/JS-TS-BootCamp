import {createExpense} from "./createExpense.js";


// let createExpenseForm = document.querySelector('form.add_expense_form')! as HTMLFormElement;
function startAllListeners(){
    displayCreateForm();
    CheckAmountField();
    createExpenseListener();
    updateExpenseListener();
    exitBtnListener();  
}
function displayCreateForm(){
    let addNewExpenseBtn = document.querySelector('.add_expense')! as HTMLButtonElement;

    //Display form when create expense is clicked
    addNewExpenseBtn.addEventListener('click', ()=>{
        //Display Form
        let add_expense_Wrapper  =document.querySelector('div.add_expense_Wrapper')! as HTMLDivElement;
        add_expense_Wrapper.classList.remove('d-none');
    })
}

function isValidInput(value:string,pattern:string):boolean{

    let regex = new RegExp(pattern, 'g');
    return regex.test(value);
}

function CheckAmountField(){
    let newAmountInput = document.getElementById('new_expense_amount')! as HTMLInputElement;
//Validate form field
    newAmountInput.addEventListener('keyup', function(){

        if(!isValidInput(newAmountInput.value, newAmountInput.getAttribute('pattern')!)){
            newAmountInput.setAttribute('has-error',"true");
        }
        else{
            newAmountInput.setAttribute('has-error',"false");

        }

    })
}

function exitBtnListener(){
    let exitBtns = document.querySelectorAll('button.exit')! as unknown as HTMLButtonElement[];
    for(let btn of exitBtns){
        btn.addEventListener('click', function(){
            let idToClose=btn.getAttribute('to-close')! as string;
            let elToClose = document.getElementById(idToClose)!;
            elToClose.classList.add('d-none');
        })
    }
}

function createExpenseListener(){
    let createExpenseBtn = document.querySelector('button.create_expense')! as HTMLButtonElement;


    createExpenseBtn.addEventListener('click',function(){
        let newAmountInput = document.getElementById('new_expense_amount')! as HTMLInputElement;
        let new_expense_title_input = document.getElementById('new_expense_title')! as HTMLInputElement;
        //check if all valid
        if(isValidInput(newAmountInput.value, newAmountInput.getAttribute('pattern')!) 
            && new_expense_title_input.value !== null
            && new_expense_title_input.value !== undefined
            && new_expense_title_input.value.length > 0){            
            createExpense(new_expense_title_input.value,parseFloat(newAmountInput.value));
        }
        
        else{
            alert('an error occurred, expense cannot be  created.')
        }
    })
    
}

function makeExpenseEditable(id: number) {
    let titleEl = document.querySelector('h4.expense_title[expense_id=' + '"' +id.toString() + '"' + ']') as HTMLInputElement;
    let amountEl = document.querySelector('h5.expense_amount[expense_id=' + '"' +id.toString() + '"' + ']') as HTMLInputElement;
    
    if(titleEl !== undefined || amountEl !== undefined){
        titleEl.setAttribute('contenteditable',"true");
        amountEl.setAttribute('contenteditable',"true");
    }
    
    else{
        alert('cannot edit the expense');
    }
    
    // if((amountEl?.value && titleEl?.value && amountEl.getAttribute('pattern') !== null && amountEl.getAttribute('pattern') !== undefined)){
    //
    //     if(isValidInput(amountEl?.value, amountEl.getAttribute('pattern')!)){
    //        
    //         ti
    //     }
    // }
    //
}

function updateExpenseListener(){
    let updateBtns = document.querySelectorAll('button.updateBtn')! as unknown as HTMLButtonElement[];
    for(let btn of updateBtns){
        btn.addEventListener('click', function(){
            let id:number = Number(btn.getAttribute('expense_id')!);
            makeExpenseEditable(id);            
        })
    }
}

export {startAllListeners};
