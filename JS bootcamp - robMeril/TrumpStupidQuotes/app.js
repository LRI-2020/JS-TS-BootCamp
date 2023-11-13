import { generateQuote } from "./quoteManager.js";
generateQuote();
let newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', function () {
    generateQuote();
});
