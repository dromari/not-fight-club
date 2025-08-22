export default class BaseElement {
    constructor(options){
        this.element = document.createElement(options.tag);
        if (options.cssClasses.length > 0) {
            this.element.classList.add(...options.cssClasses);
        }
        if(options.text) {
            this.element.textContent = options.text;
        }
        if(options.attributes) {
            for(const key in options.attributes) {
                this.element.setAttribute(key, options.attributes[key])
            }
        }
    }
}