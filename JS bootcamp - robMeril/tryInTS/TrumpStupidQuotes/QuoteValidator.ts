// import {assertEquals} from "../../../node_modules/typia/lib/module.js";
//import typia from "../../../node_modules/typia/lib/module.js";
//import typia from "typia";
interface nlp_attributes {
    "quote_structure":string[][];
    
    }

interface extendedRawQuote{
    
    "message":string,
    "nlp_attributes": nlp_attributes
}

interface rawQuote{
    "message":string,
    "nlp_attributes": string
}

function toExtendedQuotes(rawQuote: rawQuote): extendedRawQuote {
   
    let data =  {
            message: rawQuote.message,
            nlp_attributes: assertEquals<nlp_attributes>(rawQuote.nlp_attributes)
        };
    
    return assertEquals<extendedRawQuote>(data);

}

//function isRawQuote

// function ToNlpAttr(rawNpl : any) : nlp_attributes{
//    
//     if(assertEquals<nlp_attributes>(rawNpl)){
//         return rawNpl;
//     }
//    
//     throw new Error("Expected nlp_attributes object.");
// }

export { rawQuote}