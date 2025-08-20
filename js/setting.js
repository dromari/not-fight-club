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
    this.playerName;
    this.btnEdit;
  }

  createView() {
    const playerNameTitle = new BaseElement({
      tag: "p",
      cssClasses: ["player-name-title"],
      text: "Player Name:",
    });

    this.playerName = new BaseElement({
      tag: "p",
      cssClasses: ["player-name"],
      text: this.localStorage.getName(),
    });

    this.inputName = new BaseElement({
      tag: "input",
      cssClasses: ["input-name-setting"],
      attributes: {
        id: "input-name-setting",
      },
    });

    this.btnEdit = new BaseElement({
      tag: "button",
      cssClasses: ["button-edit"],
      text: "Edit",
    });

    this.btnSave = new BaseElement({
      tag: "button",
      cssClasses: ["button-save"],
      text: "Save",
    });

    this.element.append(
      playerNameTitle.element,
      this.playerName.element,
      this.btnEdit.element,
      this.inputName.element,
      this.btnSave.element
    );
  }

  updateName() {
    this.playerName.element.textContent = this.localStorage.getName();
  }
}
