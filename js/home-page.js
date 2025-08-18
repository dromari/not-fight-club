import BaseElement from "./base-element.js";

export default class HomePage extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
    this.buttonFight;
  }

  createView() {
    this.buttonFight = new BaseElement({
      tag: "button",
      cssClasses: ["button-fight"],
      text: "Fight!",
    });

    this.element.append(this.buttonFight.element);
  }
}
