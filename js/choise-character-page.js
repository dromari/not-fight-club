import data from './characters.json' with {type: "json"};
import BaseElement from "./base-element.js";

export default class ChoiseCharacterPage extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
    this.createCardsCharacters(data);
    this.wrapperChoiseCharacter;
  }

  createView() {
    this.wrapperChoiseCharacter = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-choise-character"],
    });
    this.element.append(this.wrapperChoiseCharacter.element);
  }

  createCardsCharacters(data) {
    data.forEach((character) => {
      const characterDiv = new BaseElement({
        tag: "div",
        cssClasses: ["character"],
        text: character.name,
      });
      this.wrapperChoiseCharacter.element.append(characterDiv.element);
    });
  }
}
