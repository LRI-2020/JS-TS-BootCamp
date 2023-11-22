import { startAllListeners} from "./ts/userActionsListeners.js";
import {displayExpenses} from "./ts/displayExpenses.js";

// localStorage.clear();
displayExpenses();
startAllListeners();