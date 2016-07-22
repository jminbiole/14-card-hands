


export default class Hand {
  constructor(deck_id) {
    this.deck_id = deck_id;
    this.element = document.createElement('row');
  }
  draw() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deck_id}/draw?count=5`)
      .then((res) => res.json()
      .then((data) => {
        this.data = data;
      }))
  }
  selectors = {
      card: this.element.querySelector('.row-item'),
      value: this.element.querySelector('.row-item__text'),
      img: this.element.querySelector('.row-item__pic'),
    };
  render() {
    debugger;
    const card = document.createElement('row-item');
    this.element.appendChild(card);
    this.element.card.innerHTML = template;
  }
}
const template = `
<div class="row-item">
    <img class="row-item__pic" src="" alt="">
    <p class="row-item__text"></p>
</div>`;
