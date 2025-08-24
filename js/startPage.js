import BaseElement from "./base-element.js";

export default class startPage extends BaseElement {
  constructor() {
    const options = {
      tag: "div",
      cssClasses: ["start-page"],
    };
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
      text: "Character Name:",
    });

    this.buttonCreate = new BaseElement({
      tag: "button",
      cssClasses: ["button-create"],
      text: "Create Character",
    });

    this.element.append(
      wrapperStartPage.element,
      greeting.element,
      labelName.element,
      this.inputName.element,      
      this.buttonCreate.element
    );
  }
}
