"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardsGenerator_js_1 = require("./cardsGenerator.js");
const matchingGame_js_1 = require("./matchingGame.js");
(0, cardsGenerator_js_1.createCards)();
let allCards = document.querySelectorAll('.square');
allCards.forEach(c => (0, matchingGame_js_1.cardListener)(c));
