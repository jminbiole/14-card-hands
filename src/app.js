'use strict';
import parseJson from 'parse-json';
import getOptionsData from 'get-options-data';
import GetHand from 'get-hand';

export default class App {
  constructor(element) {
    this.element = element;

  }
  getOptions() {
      return getOptionData()
        .then((data) => {
          this.data = data;
        });
  }

}
