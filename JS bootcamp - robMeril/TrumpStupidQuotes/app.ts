import {generateQuote} from "./quoteManager.js";

generateQuote()

let newQuoteButton= document.querySelector('.new-quote')!as HTMLButtonElement;

newQuoteButton.addEventListener('click',function(){
   
    generateQuote();
    
});
