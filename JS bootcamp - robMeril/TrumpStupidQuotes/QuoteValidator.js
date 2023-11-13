function isNlpAttributes(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    const object = value;
    return Array.isArray(object.quote_structure) &&
        object.quote_structure.every(q => Array.isArray(q) && q.every(a => typeof a === 'string'));
}
function isRawQuote(value) {
    if (!value || typeof value !== 'object') {
        return false;
    }
    const object = value;
    return typeof object.message === 'string' && typeof object.nlp_attributes === 'object';
}
function toNlp_Attributes(data) {
    if (isNlpAttributes(data)) {
        return data;
    }
    throw new Error("nlp attributes was expected but model does not match");
}
function toRawQuote(value) {
    if (isRawQuote(value)) {
        return value;
    }
    throw new Error('expected raw Quote but model does not match');
}
function toExtendedQuote(rawQuote) {
    return {
        message: rawQuote.message,
        nlp_attributes: toNlp_Attributes(rawQuote.nlp_attributes)
    };
}
function displayQuote(quote) {
}
export { toRawQuote, toExtendedQuote };
