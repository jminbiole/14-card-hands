'use strict';
import parseJson from 'parse-json';
import getOptionsData from 'get-options-data';
import GetHand from 'get-hand';

export default class App {
  constructor(element) {
    this.element = element;

  }
  getOptions() {
      return getOptionsData()
        .then((data) => {
          this.data = data;
        });
  }
  render(data){
    // this.element.querySelector('.row').innerHTML = '';

    this.data.forEach((singleOptionData) => {
      const hand = new getHand(singleOptionData);
      optionItem.render();

      this.element.querySelector('.row').appendChild(getOptionsData.element);
    });
  }
}
