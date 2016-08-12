const template = `
<img class="row-item__pic" src="" alt="">
<p class="row-item__text"></p>`;

export default class Hand {
  constructor(deck_id) {
    this.deck_id = deck_id;
    this.element = document.createElement('div');
    this.element.classList.add('row');
  }
  getData() {
    return fetch(`https://card-proxy.herokuapp.com/decks/${this.deck_id}/draw?count=5`)
            .then((res) => res.json())
            .then((data) => {
              this.data = data;
            });
  }
  render() {
    this.data.cards.map((card) => {
      const element = document.createElement('div');
      element.classList.add('row-item__cards');
      element.innerHTML = template;

      const selectors = {
        img: element.querySelector('.row-item__pic'),
        value: element.querySelector('.row-item__text'),
      };
      selectors.img.src = card.images.png;
      selectors.value.innerText = card.value;

      return element;
    }).forEach((cardElement) => {
      this.element.appendChild(cardElement);
  });
}
}
