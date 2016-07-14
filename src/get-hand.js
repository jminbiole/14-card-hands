const template = `
<div class="row-item">
    <img class="row-item__pic" src="http://www.placecage.com/c/200/300" alt="">
    <p class="row-item__text"></p>
</div>`;

export default class GetHand {
  constructor(data) {
    this.data = data;

    this.element = document.createElement('row');
    this.element.innerHTML = template;

    this.selectors = {
      pic: this.element.querySelector('.row-item__pic'),
      text: this.element.querySelector('.row-item__text'),
    };
  }
  render() {
  this.selectors.pic.innerText = this.data.pic;
  this.selectors.text.innerText = this.data.text;
}
}
