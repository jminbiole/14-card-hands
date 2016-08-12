// const template =

export default class Hand {
  constructor(deckId) {
    this.deckId = deckId;

    this.element = document.createElement('li');
    this.element.classList.add('row-item__cards');
    this.element.innerHTML = `
    <div class="row-item">
      <img class="row-item__pic" src="" alt="">
      <p class="row-item__text">Value</p>
    </div>
    `
  }
  getData() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deckId}/draw?count=5`)
  }
}
