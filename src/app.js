'use strict';
import Hand from 'hand';

export default class App {
  constructor(element) {
    this.element = element;
    this.data = [];
  }
  start() {
    return fetch('https://card-proxy.herokuapp.com/decks/new')
      .then((res) => res.json()
        .then((data) => {
          this.data = data;
          console.log(data);
        }))
  }
  render() {
    this.element.innerHTML = '';

    for (var i = 0; i <= 5; i++) {
      const hand = new Hand(this.data.deck_id);
      this.element.appendChild(hand.element);

      hand.draw().then(() => {
        hand.render();
      });
    }
  }
}
