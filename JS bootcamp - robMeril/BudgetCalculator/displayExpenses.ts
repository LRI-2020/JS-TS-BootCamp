import {createHtmlExpense} from "./expenseHtml.js";

interface IExpense {
    title:string
    amount:Float32Array
}
class expense implements IExpense{
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
    get amount(): Float32Array {
        return this._amount;
    }

    set amount(value: Float32Array) {
        this._amount = value;
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
    
    private _title:string
    private _amount:Float32Array
    private _id: number
    
    constructor(id:number,title:string, amount:Float32Array) {
    this._id=id;
    this._title = title;
    this._amount = amount;
    }
}

function getExpenses() : expense[] {
    
    let rawExpenses : any[] = localStorage.getItem("expenses") === null?Array():JSON.parse(localStorage.getItem("expenses")!);
    let expenses : expense[] = [];
    
    for(let item of rawExpenses){
        
        let currentExpense = item as IExpense;
        expenses.push(new expense(item.id,currentExpense.title, currentExpense.amount));        
    }
    
    return expenses;
}

function displayExpenses() : void{
    let expenses : expense[] = getExpenses();
    let expensesWrapper = document.getElementById('expensesWrapper')! as HTMLDivElement;

    for(let expense of expenses){

        expensesWrapper.appendChild(createHtmlExpense(expense.id.toString(),expense.title, expense.amount.toString()));
    }
}

export {displayExpenses}

