"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_js_1 = require("../../../node_modules/typia/lib/module.js");
let api = 'https://api.whatdoestrumpthink.com/api/';
let newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', function () {
    //target api
    // fetch(`${api}v1/quotes/random`)
    //     .then(r => r.json())
    //     .then(data => display(data.message))
});
let correctQuote = {
    "message": "I think the only difference between me and the other candidates is that I'm more honest and my women are more beautiful",
    "nlp_attributes": {
        "quote_structure": [
            [
                "Person",
                "Infinitive",
                "Determiner",
                "Adverb",
                "Noun",
                "Preposition",
                "Pronoun",
                "Conjunction",
                "Determiner",
                "Adjective",
                "Noun",
                "Copula",
                "Determiner",
                "Noun",
                "Comparative",
                "Conjunction",
                "Possessive",
                "Person",
                "Copula",
                "Adverb",
                "Adjective"
            ]
        ]
    }
};
let res = (0, module_js_1.assertEquals)(correctQuote);
console.log(res);
