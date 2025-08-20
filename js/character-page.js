import BaseElement from "./base-element.js";

export default class CharacterPage extends BaseElement {
  constructor() {
    const options = {
      tag: "div",
      cssClasses: ["character-page"],
    };
    super(options);
    this.createView();
  }

  createView() {
    const wrapperCharacter = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-character"],
    });

    const wrapperDiscription = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-discription"],
    });

    this.element.append(wrapperCharacter.element, wrapperDiscription.element);

    const wrapperImgCharacter = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-img-character"],
    });

    wrapperCharacter.element.append(wrapperImgCharacter.element);

    const imgCharacter = new BaseElement({
      tag: "img",
      cssClasses: ["img-character"],
    });

    wrapperImgCharacter.element.append(imgCharacter.element);
  }
}
