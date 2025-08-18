import BaseElement from "./base-element.js";

export default class MainView extends BaseElement {
  constructor() {
    const options = {
      tag: "main",
      cssClasses: ["main"],
    };
    super(options);
    this.setContent();
  }

  setContent(page) {
    while (this.element.lastChild) {
      this.element.removeChild(this.element.lastChild);
    }
    this.element.append(page);   
  }
}

