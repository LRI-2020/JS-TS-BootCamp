interface IExpense {
    id:number
    title:string
    amount:number
}


class Expense implements IExpense{
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    private _title:string
    private _amount:number
    private _id: number

    constructor(id:number,title:string, amount:number) {
        this._id=id;
        this._title = title;
        this._amount = amount;
    }
    
    //Call auto by JSON.Stringify and allow to keep public properties instead of private when stringify
    public toJSON(){
        return {
            id: this._id,
            title : this._title,
            amount : this._amount
        };
    }

    
}


export {IExpense, Expense}