import {rawQuote} from "./QuoteValidator.js";
let api = 'https://api.whatdoestrumpthink.com/api/'
let newQuoteButton= document.querySelector('.new-quote')!as HTMLButtonElement;

newQuoteButton.addEventListener('click',function(){
    
    //target api
    // fetch(`${api}v1/quotes/random`)
    //     .then(r => r.json())
    //     .then(data => display(data.message))
});
