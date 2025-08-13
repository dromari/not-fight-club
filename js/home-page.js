import BaseElement from "./base-element.js";

export default class HomePage extends BaseElement {
    constructor(options) {
        super(options);
        this.createView();
    }

    createView() {
        const headerHomePage = new BaseElement({
            tag: "header",
            cssClasses: ["header-home-page"],
        });

        const headerHomePageWrapper = new BaseElement({
            tag: "div",
            cssClasses: ["header-home-page-wrapper"],
        });

        headerHomePage.element.append(headerHomePageWrapper.element);

        const logo = new BaseElement({
            tag: "div",
            cssClasses: ["logo"],
            text: "Main",
        })

        const iconsContainer = new BaseElement({
            tag: "div",
            cssClasses: ["icons-contsiner"],
        })

        headerHomePageWrapper.element.append(logo.element);
        headerHomePageWrapper.element.append(iconsContainer.element);

        const iconHome = new BaseElement({
            tag: "a",
            cssClasses: ["icon-header", "home"],
        })

         const iconProfile = new BaseElement({
            tag: "a",
            cssClasses: ["icon-header", "profile"],
        })

         const iconSettings = new BaseElement({
            tag: "a",
            cssClasses: ["icon-header", "setting"],
        })

        iconsContainer.element.append(iconHome.element);
        iconsContainer.element.append(iconProfile.element);
        iconsContainer.element.append(iconSettings.element);

        const buttonFight = new BaseElement({
            tag: "button",
            cssClasses: ["button-fight"],
            text: "Fight!",
        })

        this.element.append(headerHomePage.element);
        this.element.append(buttonFight.element);
    }
}