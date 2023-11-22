import {getExpenses} from "./expensesRepo.js";
import {Expense, IExpense} from "./expenses.js";

function getLastId() {
    
    let expenses:IExpense[] = getExpenses();
    return (expenses.reduce((previousValue,currentValue,currentIndex,array) => {
            let res = array.find(e => e.id === Math.max(previousValue.id,currentValue.id));
            if( res === undefined){
                throw new Error('Last Id not found');
            }
            return res;
            }
        )).id;
}

function createExpense(title:string,amount:Float32Array):boolean{
    let lastId = getLastId();
    let id:number = ++lastId;
    let expense:Expense = new Expense(id,title,amount);
    
    if(storeExpense(expense)){
        return true;   
    }
    console.log("error has occurred, expense not save");
    return false;
}

function storeExpense(expense:IExpense):boolean{
    let expenses = getExpenses();
    expenses.push(expense);
    try{
        localStorage.setItem("expenses",JSON.stringify(expenses));
        return true
    }    
    catch(error){
        console.log(error);
        return false;
    }
}

function displayExpenseForm(){
    
    
    
}

export {createExpense};
