import BaseElement from "./base-element.js";

export default class startPage extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
    this.inputName;
    this.buttonCreate;
  }

  createView() {
    const wrapperStartPage = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-start-page"],
    });

    const greeting = new BaseElement({
      tag: "h1",
      cssClasses: ["greeting"],
      text: "Create Your Character",
    });

    this.inputName = new BaseElement({
      tag: "input",
      cssClasses: ["input-name"],
      attributes: {
        id: "input-name",
      },
    });

    const labelName = new BaseElement({
      tag: "label",
      cssClasses: ["label-name"],
      attributes: {
        for: "input-name",
      },
      text: "Character Name",
    });

    this.buttonCreate = new BaseElement({
      tag: "button",
      cssClasses: ["button-create"],
      text: "Create Character",
    });

    this.element.append(wrapperStartPage.element);
    this.element.append(greeting.element);
    this.element.append(this.inputName.element);
    this.element.append(labelName.element);
    this.element.append(this.buttonCreate.element);
  }
}
