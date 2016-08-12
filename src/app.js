'use strict';
import Hand from 'hand';

export default class App {
  constructor(appEl) {
    this.appEl = appEl;
  }
  start() {
    return fetch('https://card-proxy.herokuapp.com/decks/new')
      .then((res) => res.json()
          .then((data) => {
            this.data = data;
            for (let i = 0; i < 3; i++) {
              const hand = new Hand(this.data.deck_id);
              this.appEl.appendChild(hand.element);

              hand.getData().then(() => {
                hand.render();
              });
            }
          }));
  }
}
