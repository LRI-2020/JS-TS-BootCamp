interface IExpense {
    id:number
    title:string
    amount:Float32Array
}
class Expense implements IExpense{
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

export {IExpense, Expense}