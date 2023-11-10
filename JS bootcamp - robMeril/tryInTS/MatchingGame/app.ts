import {createCards} from "./cardsGenerator.js";
import {cardListener} from "./matchingGame.js";

createCards();


let allCards = document.querySelectorAll('.square')!;

allCards.forEach(c => cardListener(c as HTMLDivElement));
