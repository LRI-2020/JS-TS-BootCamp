import { createCards } from "./cardsGenerator.js";
import { cardListener } from "./matchingGame.js";
startGame();
let newGame = document.querySelector('.newGame');
newGame.addEventListener('click', function () {
    startGame();
});
function startGame() {
    document.querySelector('.endGame').classList.add('hidden');
    createCards();
    let allCards = document.querySelectorAll('.square');
    allCards.forEach(c => cardListener(c));
}
