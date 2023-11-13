// import {assertEquals} from "../../../node_modules/typia/lib/module.js";
//import typia from "../../../node_modules/typia/lib/module.js";
//import typia from "typia";
import {extendedRawQuote, rawQuote, nlp_attributes} from "./quote.js";


function isNlpAttributes(value:unknown) : value is nlp_attributes {
    if (!value || typeof value !== 'object') {
        return false
    }
    const object = value as Record<string, unknown>;
      
   
    return Array.isArray(object.quote_structure) &&
        object.quote_structure.every(q => Array.isArray(q) && q.every(a => typeof a === 'string') );
}

function isRawQuote(value:any): value is rawQuote{
    
    if (!value || typeof value !== 'object') {
        return false
    }
    const object = value as Record<string, unknown>;
    
    return typeof object.message === 'string' && typeof object.nlp_attributes ==='object';
}

function toNlp_Attributes(data:any): nlp_attributes{
    
    if(isNlpAttributes(data)){
        
        return data as nlp_attributes;
    }
    
    throw new Error("nlp attributes was expected but model does not match");
}

function toRawQuote(value:any): rawQuote{
    
    if(isRawQuote(value)){
        return value as rawQuote;
    }
    
    throw new Error('expected raw Quote but model does not match');
}


function toExtendedQuote(rawQuote : rawQuote) : extendedRawQuote{
    return {

        message: rawQuote.message,
        nlp_attributes: toNlp_Attributes(rawQuote.nlp_attributes)

    } as extendedRawQuote
}

function displayQuote(quote:extendedRawQuote){
    
}

export { toRawQuote, toExtendedQuote}