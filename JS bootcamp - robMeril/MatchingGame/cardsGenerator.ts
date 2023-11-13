function AddCartToRows(shuffleCards: HTMLDivElement[]) {
    
    if(shuffleCards.length !== 24){
 //   if(shuffleCards.length !== 4){
        throw new Error("Wrong number of cards! Should have 24 cards")
    }
    
    let rows:HTMLDivElement[] = [];
    
    while(shuffleCards.length>0){
        let currentRow = document.createElement('div');
        currentRow.classList.add('row');
        let currentCards =shuffleCards.splice(0,6);
        currentCards.forEach(c => currentRow.appendChild(c));
        rows.push(currentRow);
    }  
    return rows;
}

function createCards() {
    let gameWrapper = document.querySelector('div.gameWrapper')!;
    gameWrapper.innerHTML='';
    let cards: HTMLDivElement[] = [];

   for (let i = 0; i < 12; i++) {
  //  for (let i = 0; i < 2; i++) {
        cards.push(createCard(i + 1));
    }
    let shuffleCards = duplicateCards(cards).sort((a, b) => 0.5 - Math.random());
    
    AddCartToRows(shuffleCards).forEach(r => gameWrapper.appendChild(r));
}

function duplicateCards(cards: HTMLDivElement[]) {

    let res: HTMLDivElement[] = [...cards];
    for (let card of cards) {
        let duplicate = <HTMLDivElement>card.cloneNode(true);
        res.push(duplicate);
    }
    return res;
}

function createCard(id: number) {

    let card = document.createElement('div');
    card.classList.add('square','col-2', 'text-center', 'p-0', 'text-hidden');
    card.innerText = `${id}`;
    return card;

}

export {createCards}