'use strict';
import parseJson from 'parse-json';
import Hand from 'hand';

export default class App {
  constructor(element) {
    this.element = element;

    this.data = [];
  }
  getOptionsData() {
    return fetch('https://card-proxy.herokuapp.com/decks/new')
      .then(parseJson)
      .then((data) => {
        this.data = data;
      });
  }
  render() {
    for (var i = 0; i <= 3; i++) {
      const hand = new Hand(this.data.deck_id);

      this.element.appendChild(hand.element);
      hand.render();
    }
      // this.element = document.querySelector('.row').innerHTML = '';
      // // this.data.forEach((data) => {
      // //   const hand = new Hand(deck_id);
      // //   hand.render();
      // //
      // //   this.element.querySelector('.row').appendChild(hand.element);
      // // });
  }
}
