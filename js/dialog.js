import BaseElement from "./base-element.js";

export default class Dialog extends BaseElement {
  constructor() {
    const options = {
      tag: "dialog",
      cssClasses: ["dialog"],
    };
    super(options);
    this.createView();
  }

  createView() {
    this.textDialog = new BaseElement({
      tag: "p",
      cssClasses: ["text-dialog"], 
      text: ''     
    });

    this.closeDialog = new BaseElement({
      tag: "button",
      cssClasses: ["btn-close-dialog"],
      text: "New Game",
    });

    this.element.append(this.textDialog.element, this.closeDialog.element);

    // closeDialog.element.addEventListener("click", () => {
    //   this.element.close();            
    // });
  }
}
