"use strict";
//can create a function that returns a function decorator. This function can have parameters
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function decoratorWrapper(log) {
    console.log("This is the function that return a method decorator. I can add code in it before returning the decorator function");
    console.log(log);
    return function anotherMethodDecorator(t, n, d) {
        console.log("ANOTHER METHOD DECORATOR");
        console.log("target : " + t);
        console.log("name : " + n);
        console.log("descriptor : " + d);
    };
}
function classDecorator(target) {
    console.log("CLASS DECORATOR");
    console.log("class target" + target);
}
function propertyDecorator(t, n) {
    console.log("PROPERTY DECORATOR");
    console.log("target : " + t);
    console.log("name : ");
    console.log(n);
}
function accessorDecorator(t, n, desc) {
    console.log("ACCESSOR DECORATOR");
    console.log("target : " + t);
    console.log("name : " + n);
    console.log("descriptor : " + desc);
}
function methodDecorator(target, n, desc) {
    console.log("METHOD DECORATOR");
    console.log("target : " + target);
    console.log("name : " + n);
    console.log("descriptor : " + desc);
}
function parameterDecorator(t, n, p) {
    console.log("PARAMETER DECORATOR");
    console.log("target : " + t);
    console.log("name : " + n);
    console.log("position : " + p);
}
let Product = class Product {
    constructor(title) {
        this._price = 0;
        this._title = title;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value > 0)
            this._price = value;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    updateProductName(name) {
        this._title = name;
    }
};
__decorate([
    accessorDecorator,
    __param(0, parameterDecorator)
], Product.prototype, "price", null);
__decorate([
    methodDecorator,
    decoratorWrapper('this is the log I passed as argument to the decorator wrapper')
], Product.prototype, "updateProductName", null);
__decorate([
    propertyDecorator
], Product.prototype, "_title", void 0);
Product = __decorate([
    classDecorator
], Product);
