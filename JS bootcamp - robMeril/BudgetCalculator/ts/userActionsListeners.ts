﻿import {displayExpenses} from "./displayExpenses";


let addNewExpenseBtn = document.querySelector('.add_expense')! as HTMLButtonElement;
// let createExpenseForm = document.querySelector('form.add_expense_form')! as HTMLFormElement;
let createExpenseBtn = document.querySelector('button.create_expense')! as HTMLButtonElement;
let add_expense_Wrapper  =document.querySelector('div.add_expense_Wrapper')! as HTMLDivElement;
let exitBtns = document.querySelectorAll('button.exit')! as unknown as HTMLButtonElement[];

function startAllListeners(){
    displayCreateForm();
    CheckAmountField();
    exitBtn();
    
    
}
function displayCreateForm(){
    //Display form when create expense is clicked
    addNewExpenseBtn.addEventListener('click', ()=>{

        //Display Form
        add_expense_Wrapper.classList.remove('d-none');
    })
}

function isValidInput(value:string,pattern:string):boolean{

    let regex = new RegExp(pattern, 'g');
    return regex.test(value);
}

function CheckAmountField(){

//Validate form field
    let amountInput = document.getElementById('new_expense_amount')! as HTMLInputElement;
    amountInput.addEventListener('keyup', function(){

        if(!isValidInput(amountInput.value, amountInput.getAttribute('pattern')!)){
            amountInput.setAttribute('has-error',"true");
        }
        else{
            amountInput.setAttribute('has-error',"false");

        }

    })
}

function exitBtn(){
    for(let btn of exitBtns){
        btn.addEventListener('click', function(){
            let idToClose=btn.getAttribute('to-close')! as string;
            let elToClose = document.getElementById(idToClose)!;
            elToClose.classList.add('d-none');
        })
    }
}

export {startAllListeners};
