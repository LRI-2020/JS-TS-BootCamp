import {displayExpenses} from "./ts/displayExpenses.js";
import {startAllListeners} from "./ts/userActionsListeners.js";

let expense1 = {
    id:1,
    title:"expense1",
    amount:52
}
let expense2 = {
    id:2,
    title:"expense2",
    amount:52
}
let expense3 = {
    id:3,
    title:"expense3",
    amount:52
}
let myExpenses:any[] = [];
myExpenses.push(expense1, expense2, expense3);

localStorage.setItem("expenses",JSON.stringify(myExpenses));


displayExpenses();
startAllListeners();