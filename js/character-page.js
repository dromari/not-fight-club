import BaseElement from "./base-element.js";
import ChoiseCharacterPage from "./choise-character-page.js";

export default class CharacterPage extends BaseElement {
  constructor(localStorage) {
    const options = {
      tag: "div",
      cssClasses: ["character-page"],
    };
    super(options);
    this.localStorage = localStorage;
    this.createView();
  }

  
  createView() {
    const choiseCharacterPage = new ChoiseCharacterPage(this.localStorage);
    choiseCharacterPage.element.addEventListener('click', (e) => {    
      if(e.target.closest('.character') && !e.target.classList.contains("about-character")) {
         this.imgCharacter.element.src = this.localStorage.getMyCharacter().url
      }
    })

    const wrapperCharacter = new BaseElement({
      tag: "div",
      cssClasses: ["container-my-character"],
    });

    const myCharacter = this.localStorage.getMyCharacter();
    const nameMyCharachter = this.localStorage.getName();

    const wrapperDiscription = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-discription"],
    });

    this.element.append(
      wrapperCharacter.element,
      wrapperDiscription.element,
      choiseCharacterPage.element
    );

    const wrapperImgCharacter = new BaseElement({
      tag: "div",
      cssClasses: ["character-img-container"],
    });

    wrapperCharacter.element.append(wrapperImgCharacter.element);

    this.imgCharacter = new BaseElement({
      tag: "img",
      cssClasses: ["my-character-img"],
      attributes: {
        src: myCharacter.url,
      },
    });

    const buttonChoise = new BaseElement({
      tag: "button",
      cssClasses: ["button-choise"],
      text: "Choise Character",
    });

    wrapperImgCharacter.element.append(
      this.imgCharacter.element,
      buttonChoise.element
    );

    buttonChoise.element.addEventListener('click', () => {
      choiseCharacterPage.element.classList.add('choise')
    })

    const nameCharacter = new BaseElement({
      tag: "p",
      cssClasses: ["name-character"],
      text: `${nameMyCharachter}`,
    });

    const wins = new BaseElement({
      tag: "p",
      cssClasses: ["wins"],
      text: `Wins: ${0}`,
    });

    const loses = new BaseElement({
      tag: "p",
      cssClasses: ["loses"],
      text: `Loses: ${0}`,
    });

    wrapperDiscription.element.append(
      nameCharacter.element,
      wins.element,
      loses.element
    );
  }
}
