import BaseElement from "./base-element.js";

export default class characterPage extends BaseElement {
    constructor(options) {
        super(options);
    }

    createView() {
        const headerCharacterPage = new BaseElement({
            tag: "header",
            cssClasses: ["header-character-page"],
            text: "Character",
        });

        const mainCharacterPade = new BaseElement({
            tag: "main",
            cssClasses: ["main-character-page"],
        })

        const wrapperCharacter = new BaseElement({
            tag: "div",
            cssClasses: ["wrapper-character"],
        })

        const wrapperDiscription = new BaseElement({
            tag: "div",
            cssClasses: ["wrapper-discription"],
        })

        mainCharacterPade.element.append(wrapperCharacter);
        mainCharacterPade.element.append(wrapperDiscription);

        const wrapperImgCharacter = new BaseElement({
            tag: "div",
            cssClasses: ["wrapper-img-character"]
        })

        wrapperCharacter.element.append(wrapperImgCharacter);

        const imgCharacter = new BaseElement({
            tag: "img",
            cssClasses: ["img-character"]
        })

        wrapperImgCharacter.element.append(imgCharacter);

        

        this.element.append(headerCharacterPage.element);
        this.element.append(mainCharacterPade);
    }
}