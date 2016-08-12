'use strict';


export default class App {
  constructor(appEl) {
    this.appEl = appEl;
  }
  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/questions')
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          for (let i = 0; i < 5; i++) {
            const hand = new Hands(this.data.deck_id);
            this.appEl.querySelector('.container');

            hand.getData().then(() => {
              hand.render();
            });
          }
        });
  }
}
