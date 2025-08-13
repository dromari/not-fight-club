import StartPage from "./js/startPage.js";
import BaseElement from "./js/base-element.js";
import MainView from "./js/mainView.js";
import HomePage from "./js/home-page.js";

const startPage = new StartPage({
  tag: "div",
  cssClasses: ["start-page"],
});

const homePage = new HomePage({
  tag: "div",
  cssClasses: ["home-page"],
});

const main = new MainView();
document.body.append(main.element);

main.setContent(startPage.element);

setTimeout(() => {
  main.setContent(homePage.element);
}, 5000);

