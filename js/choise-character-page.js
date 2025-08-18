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

    const btnClose = new BaseElement({
      tag: "button",
      cssClasses: ["button-close"],
    });
    this.wrapperChoiseCharacter.element.append(btnClose.element)
  }

  createCardsCharacters(data) {
    data.forEach((character) => {
      const characterDiv = new BaseElement({
        tag: "div",
        cssClasses: ["character"],
      });
      this.wrapperChoiseCharacter.element.append(characterDiv.element);

      const nameCharacter = new BaseElement({
        tag: "p",
        cssClasses: ["name-character"],
        text: character.name,
      });

      const containerImgCharacter = new BaseElement({
        tag: "div",
        cssClasses: ["container-img-character"],
      });

      const healthCharacter = new BaseElement({
        tag: "p",
        cssClasses: ["health-character"],
        text: `Health: ${character.health}`,
      });

      const aboutCharacter = new BaseElement({
        tag: "a",
        cssClasses: ["about-character"],
        text: `About ${character.name}`,
        attributes: {
          href: character.data, 
          target: "_blank"         
        },
      });

      characterDiv.element.append(nameCharacter.element);
      characterDiv.element.append(containerImgCharacter.element);
      characterDiv.element.append(healthCharacter.element);
      characterDiv.element.append(aboutCharacter.element);

      const imgCharacter = new BaseElement({
        tag: "img",
        cssClasses: ["character-img"],
        attributes: {
          src: character.url,
          alt: "img",
        },
      });

      containerImgCharacter.element.append(imgCharacter.element);
    });
  }
}
