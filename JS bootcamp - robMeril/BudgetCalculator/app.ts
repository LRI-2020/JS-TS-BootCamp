import { startAllListeners} from "./ts/userActionsListeners.js";
import {displayExpenses, displayTotal} from "./ts/displayExpenses.js";

// localStorage.clear();
displayExpenses();
displayTotal();
startAllListeners();