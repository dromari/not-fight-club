import BaseElement from "./base-element.js";

export default class Setting extends BaseElement {
  constructor(localStorage) {
    const options = {
      tag: "div",
      cssClasses: ["setting-page"],
    };
    super(options);
    this.localStorage = localStorage;
    this.createView();
  }

  createView() {
    const playerNameTitle = new BaseElement({
      tag: "p",
      cssClasses: ["player-name-title"],
      text: "Player Name:",
    });

    const playerName = new BaseElement({
      tag: "p",
      cssClasses: ["player-name"],
      text: this.localStorage.getName(),
    });

    const btnEdit = new BaseElement({
      tag: "button",
      cssClasses: ["button-edit"],
      text: "Edit",
    });

    this.inputName = new BaseElement({
      tag: "input",
      cssClasses: ["input-name"],
      attributes: {
        id: "input-name",
      },
    });

    this.element.append(
      playerNameTitle.element,
      playerName.element,
      btnEdit.element
    );
  }
}
