const template = `
<div class="row-item">
    <img class="row-item__pic" src="" alt="">
    <p class="row-item__text"></p>
</div>`;

export default class Hand {
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
    console.log(this.data)
    this.selectors.pic.src = this.data.pic;
    this.selectors.text.innerText = this.data.text;
  }
}
