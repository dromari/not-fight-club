import BaseElement from "./base-element.js";

export default class Header extends BaseElement {
  constructor() {
    const options = {
      tag: "header",
      cssClasses: ["header"],
    };
    super(options);
    this.createView();
    this.namePage;
    this.iconHome;
    this.iconProfile;
    this.iconSettings;
  }

  createView() {
    const headerWrapper = new BaseElement({
      tag: "div",
      cssClasses: ["header-wrapper"],
    });

    this.element.append(headerWrapper.element);

    this.namePage = new BaseElement({
      tag: "div",
      cssClasses: ["name-page"],
      text: "Main",
    });

    const iconsContainer = new BaseElement({
      tag: "div",
      cssClasses: ["icons-container"],
    });

    headerWrapper.element.append(this.namePage.element, iconsContainer.element);

    this.iconHome = new BaseElement({
      tag: "a",
      cssClasses: ["icon-header", "home"],
    });

    this.iconProfile = new BaseElement({
      tag: "a",
      cssClasses: ["icon-header", "profile"],
    });

    this.iconSettings = new BaseElement({
      tag: "a",
      cssClasses: ["icon-header", "setting"],
    });

    iconsContainer.element.append(
      this.iconHome.element,
      this.iconProfile.element,
      this.iconSettings.element
    );
  }
}
