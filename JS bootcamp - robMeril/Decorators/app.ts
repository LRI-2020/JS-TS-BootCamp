
//can create a function that returns a function decorator. This function can have parameters

function decoratorWrapper(log:string){
    console.log("This is the function that return a method decorator. I can add code in it before returning the decorator function");
    console.log(log);
    return function anotherMethodDecorator(t:any,n:string,d:PropertyDescriptor){
        console.log("ANOTHER METHOD DECORATOR");
        console.log("target : " + t);
        console.log("name : " + n);
        console.log("descriptor : " + d);
    }
}

function classDecorator(target: any) {
    console.log("CLASS DECORATOR");
    console.log("class target" + target);

}

function propertyDecorator(t: any, n: string | symbol) {
    console.log("PROPERTY DECORATOR");
    console.log("target : " + t);
    console.log("name : ");
    console.log(n);
}

function accessorDecorator(t: any, n: string, desc: PropertyDescriptor) {
    console.log("ACCESSOR DECORATOR");
    console.log("target : " + t);
    console.log("name : " + n);
    console.log("descriptor : " + desc);
}

function methodDecorator(target: any, n: string, desc: PropertyDescriptor) {
    console.log("METHOD DECORATOR");
    console.log("target : " + target);
    console.log("name : " + n);
    console.log("descriptor : " + desc);

}

function parameterDecorator(t: any, n: string, p:number) {
    console.log("PARAMETER DECORATOR");
    console.log("target : " + t);
    console.log("name : " + n);
    console.log("position : " + p);
}
@classDecorator
class Product {
    get price(): number {
        return this._price;
    }

    @accessorDecorator
    set price(@parameterDecorator value: number) {
        if (value > 0)
            this._price = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    @methodDecorator
    @decoratorWrapper('this is the log I passed as argument to the decorator wrapper')
    updateProductName(name: string) {
        this._title = name;
    }

    @propertyDecorator
    private _title: string;

    private _price: number = 0;


    constructor(title: string) {

        this._title = title;
    }
}