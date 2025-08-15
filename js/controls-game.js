import BaseElement from "./base-element.js";

export default class ControlsGame extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
  }

  createView() {
    const headerWrapper = new BaseElement({
      tag: "div",
      cssClasses: ["header-wrapper"],
    });

    this.element.append(headerWrapper.element);

    const namePage = new BaseElement({
      tag: "div",
      cssClasses: ["name-page"],
      text: "Main",
    });

    const iconsContainer = new BaseElement({
      tag: "div",
      cssClasses: ["icons-container"],
    });

    headerWrapper.element.append(namePage.element);
    headerWrapper.element.append(iconsContainer.element);

    const iconHome = new BaseElement({
      tag: "a",
      cssClasses: ["icon-header", "home"],
    });

    const iconProfile = new BaseElement({
      tag: "a",
      cssClasses: ["icon-header", "profile"],
    });

    const iconSettings = new BaseElement({
      tag: "a",
      cssClasses: ["icon-header", "setting"],
    });

    iconsContainer.element.append(iconHome.element);
    iconsContainer.element.append(iconProfile.element);
    iconsContainer.element.append(iconSettings.element);
  }
}

