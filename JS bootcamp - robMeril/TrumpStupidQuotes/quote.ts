interface nlp_attributes {
    "quote_structure":string[][];

}

interface extendedRawQuote{

    "message":string,
    "nlp_attributes": nlp_attributes
}

interface rawQuote{
    "message":string,
    "nlp_attributes": object
}

export {rawQuote, extendedRawQuote, nlp_attributes}