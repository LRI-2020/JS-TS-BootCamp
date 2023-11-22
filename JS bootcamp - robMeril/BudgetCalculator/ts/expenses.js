class Expense {
    constructor(id, title, amount) {
        this._id = id;
        this._title = title;
        this._amount = amount;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get amount() {
        return this._amount;
    }
    set amount(value) {
        this._amount = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    //Call auto by JSON.Stringify and allow to keep public properties instead of private when stringify
    toJSON() {
        return {
            id: this._id,
            title: this._title,
            amount: this._amount
        };
    }
}
export { Expense };
