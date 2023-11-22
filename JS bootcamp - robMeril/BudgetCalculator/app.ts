import {displayExpenses} from "./ts/displayExpenses.js";
import {startAllListeners} from "./ts/userActionsListeners.js";
import {getExpenses} from "./ts/expensesRepo.js";

// localStorage.clear();
displayExpenses();
startAllListeners();