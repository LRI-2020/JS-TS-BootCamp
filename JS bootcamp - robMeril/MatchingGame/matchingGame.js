function CheckMatch(card1, card2) {
    // let value1 = card1.querySelector(".value")! as HTMLParagraphElement;
    // let value2 = card2.querySelector(".value")! as HTMLParagraphElement;
    // return value1.innerText === value2.innerText;tsc
    return card1.innerText === card2.innerText;
}
function isSelectable(card) {
    return !card.classList.contains("won") && !card.classList.contains('selected');
}
function SetWon(cards) {
    cards.forEach(c => {
        c.classList.remove("selected");
        c.classList.add("won");
    });
}
function ResetCards(cards) {
    cards.forEach(c => {
        c.classList.add("text-hidden");
        c.classList.remove("selected");
    });
}
function checkSelectedCards(selectedCards) {
    if (selectedCards.length != 2) {
        throw new Error("Should only have 2 cards to check");
    }
    if (CheckMatch(selectedCards[0], selectedCards[1])) {
        SetWon(selectedCards);
    }
    else {
        setTimeout(() => ResetCards(selectedCards), 1000);
    }
}
function SelectCard(card) {
    card.classList.add('selected');
    card.classList.remove("text-hidden");
}
function cardListener(card) {
    card.addEventListener('click', function () {
        let selectedCards = document.querySelectorAll('.square.selected');
        if (selectedCards.length < 2 && isSelectable(card)) {
            SelectCard(card);
            selectedCards = document.querySelectorAll('.square.selected');
        }
        if (selectedCards.length === 2) {
            checkSelectedCards(selectedCards);
            //selectedCards = document.querySelectorAll('.square.selected')!;
        }
    });
}
export { cardListener };
