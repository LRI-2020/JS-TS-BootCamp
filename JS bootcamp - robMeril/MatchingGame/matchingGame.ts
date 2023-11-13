

function CheckMatch(card1: HTMLDivElement, card2: HTMLDivElement) {
    // let value1 = card1.querySelector(".value")! as HTMLParagraphElement;
    // let value2 = card2.querySelector(".value")! as HTMLParagraphElement;
    // return value1.innerText === value2.innerText;tsc
    
    return card1.innerText === card2.innerText;
}

function isSelectable(card: HTMLDivElement): boolean {

    return !card.classList.contains("won") && !card.classList.contains('selected');
}

function SetWon(cards: HTMLDivElement[]) {
    cards.forEach(c => {
        c.classList.remove("selected");
        c.classList.add("won");
    });
}

function ResetCards(cards: HTMLDivElement[]) {

    cards.forEach(c => {
        c.classList.add("text-hidden");
        c.classList.remove("selected");
    })

}

function checkSelectedCards(selectedCards: HTMLDivElement[]) {

    if (selectedCards.length != 2) {
        throw new Error("Should only have 2 cards to check");
    }

    if (CheckMatch(selectedCards[0], selectedCards[1])) {

        SetWon(selectedCards);

    } else {
        setTimeout(() => ResetCards(selectedCards), 1000);
    }
}

function SelectCard(card: HTMLDivElement) {
    card.classList.add('selected');
    card.classList.remove("text-hidden");

}

function cardListener(card: HTMLDivElement) {

    card.addEventListener('click', function () {

            let selectedCards = document.querySelectorAll('.square.selected')!;

            if (selectedCards.length < 2 && isSelectable(card)) {
                SelectCard(card);
                selectedCards = document.querySelectorAll('.square.selected')!;
            }

            if (selectedCards.length === 2) {

                checkSelectedCards(selectedCards as unknown as HTMLDivElement[]);

                //selectedCards = document.querySelectorAll('.square.selected')!;
            }
        }
    )
}

export {cardListener}
