import {extendedRawQuote} from "./quote.js";
import {toExtendedQuote} from "./QuoteValidator.js";

let api = 'https://api.whatdoestrumpthink.com/api/';

function generateQuote(){
 
    getQuote().then(quote => displayQuote(quote))
}

async function getQuote() {
    let r = await fetch(`${api}v1/quotes/random`);
    let data: any = await r.json();
    return toExtendedQuote(data);
}

function displayQuote(quote:extendedRawQuote){
    
    let displayEl = document.querySelector('.quote-text')! as HTMLQuoteElement;    
    displayEl.innerText = quote.message;
}

export {generateQuote}