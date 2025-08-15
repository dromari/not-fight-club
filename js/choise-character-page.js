import data from './characters.json' with {type: "json"};
import BaseElement from "./base-element.js";

export default class ChoiseCharacterPage extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
    this.createCardsCharacters(data);
  }

  createView() {
    const wrapperChoiseCharacter = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-choise-character"],
    });       
    this.element.append(wrapperChoiseCharacter.element)   
  }

  createCardsCharacters(data) {
      data.forEach((character) => {
        const character = new BaseElement({
        tag: "div",
        cssClasses: ["character"],
        text: character.name
      });
       wrapperChoiseCharacter.element.append(character.element);
      });
    }
}
