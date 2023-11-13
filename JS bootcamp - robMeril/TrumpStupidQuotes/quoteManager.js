var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { toExtendedQuote } from "./QuoteValidator.js";
let api = 'https://api.whatdoestrumpthink.com/api/';
function generateQuote() {
    getQuote().then(quote => displayQuote(quote));
}
function getQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        let r = yield fetch(`${api}v1/quotes/random`);
        let data = yield r.json();
        return toExtendedQuote(data);
    });
}
function displayQuote(quote) {
    let displayEl = document.querySelector('.quote-text');
    displayEl.innerText = quote.message;
}
export { generateQuote };
