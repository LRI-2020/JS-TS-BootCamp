"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCards = void 0;
function AddCartToRows(shuffleCards) {
    if (shuffleCards.length !== 24) {
        throw new Error("Wrong number of cards! Should have 24 cards");
    }
    let rows = [];
    while (shuffleCards.length > 0) {
        let currentRow = document.createElement('div');
        currentRow.classList.add('row');
        let currentCards = shuffleCards.splice(0, 6);
        currentCards.forEach(c => currentRow.appendChild(c));
        rows.push(currentRow);
    }
    return rows;
}
function createCards() {
    let gameWrapper = document.querySelector('div.gameWrapper');
    let cards = [];
    for (let i = 0; i < 12; i++) {
        cards.push(createCard(i + 1));
    }
    let shuffleCards = duplicateCards(cards).sort((a, b) => 0.5 - Math.random());
    AddCartToRows(shuffleCards).forEach(r => gameWrapper.appendChild(r));
}
exports.createCards = createCards;
function duplicateCards(cards) {
    let res = [...cards];
    for (let card of cards) {
        let duplicate = card.cloneNode(true);
        res.push(duplicate);
    }
    return res;
}
function createCard(id) {
    let card = document.createElement('div');
    card.classList.add('square', 'col-2', 'text-center', 'p-0', 'text-hidden');
    card.innerText = `${id}`;
    return card;
}
