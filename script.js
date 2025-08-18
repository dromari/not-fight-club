import ControlsGame from "./js/controls-game.js";
import MainView from "./js/mainView.js";
import StartPage from "./js/startPage.js";
import HomePage from "./js/home-page.js";
import CharacterPage from "./js/character-page.js";
import ChoiseCharacterPage from "./js/choise-character-page.js";
import FightPage from "./js/fight-page.js";
import Setting from "./js/setting.js";
import LocalStorage from "./js/localStorage.js";

const localStorage = new LocalStorage();
// const localKeyName = "myName";

const main = new MainView();
document.body.append(main.element);

const startPage = new StartPage({
  tag: "div",
  cssClasses: ["start-page"],
});

main.setContent(startPage.element);

const controlsGame = new ControlsGame({
  tag: "header",
  cssClasses: ["header"],
});

const homePage = new HomePage({
  tag: "div",
  cssClasses: ["home-page"],
});

const characterPage = new CharacterPage({
  tag: "div",
  cssClasses: ["character-page"],
});

controlsGame.iconHome.element.addEventListener("click", () => {
  controlsGame.namePage.element.textContent = "Main";
  main.setContent(homePage.element);
});

controlsGame.iconProfile.element.addEventListener("click", () => {
  controlsGame.namePage.element.textContent = "Character";
  main.setContent(characterPage.element);
});

const setting = new Setting(localStorage);

controlsGame.iconSettings.element.addEventListener("click", () => {
  controlsGame.namePage.element.textContent = "Setting";
  main.setContent(setting.element);
});

startPage.buttonCreate.element.addEventListener("click", () => {
  if (startPage.inputName.element.value) {
    localStorage.saveName(startPage.inputName.element.value);
    // localStorage.setItem(localKeyName, startPage.inputName.element.value);
    document.body.append(controlsGame.element);
    main.setContent(homePage.element);
  }
});

const fightPage = new FightPage({
  tag: "div",
  cssClasses: ["fight-page"],
});


homePage.buttonFight.element.addEventListener("click", () => {
  main.setContent(fightPage.element);
  controlsGame.namePage.element.textContent = "Battle";
});




const choiseCharacterPage = new ChoiseCharacterPage({
  tag: "div",
  cssClasses: ["choise-character-page"],
});

// main.setContent(choiseCharacterPage.element);

// setTimeout(() => {
//   main.setContent(homePage.element);
// }, 5000);
