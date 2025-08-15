import BaseElement from "./base-element.js";

export default class HomePage extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
  }

  createView() {
    const buttonFight = new BaseElement({
      tag: "button",
      cssClasses: ["button-fight"],
      text: "Fight!",
    });

    this.element.append(buttonFight.element);
  }
}
