import {getExpenses} from "./expensesRepo.js";
import {Expense, IExpense} from "./expenses.js";

function getLastId() {
    
    let expenses:IExpense[] = getExpenses();
    
    if(expenses.length ===0){
        return 0;
    }
    return (expenses.reduce((previousValue,currentValue,currentIndex,array) => {
            let res = array.find(e => e.id === Math.max(previousValue.id,currentValue.id));
            if( res === undefined){
                throw new Error('Last Id not found');
            }
            return res;
            }
        )).id;
}

function createExpense(title:string,amount:number):boolean{
    let lastId:number = getLastId();
    let id:number = ++lastId;
    let expense:Expense = new Expense(id,title,amount);
    console.log(expense.id);
    if(addExpense(expense)){
        return true;   
    }
    console.log("error has occurred, expense not save");
    return false;
}

function storeExpenses(expenses: IExpense[]) {
    try{
        localStorage.setItem("expenses",JSON.stringify(expenses));
        return true
    }
    catch(error){
        console.log(error);
        return false;
    }
}

function addExpense(expense:IExpense):boolean{
    let expenses: IExpense[] = getExpenses();
    expenses.push(expense);
        return storeExpenses(expenses);
   
}

function displayExpenseForm(){
    
    
    
}

export {createExpense, storeExpenses};
