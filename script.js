import Header from "./js/header.js";
import MainView from "./js/mainView.js";
import StartPage from "./js/startPage.js";
import HomePage from "./js/home-page.js";
import CharacterPage from "./js/character-page.js";
import ChoiseCharacterPage from "./js/choise-character-page.js";
import FightPage from "./js/fight-page.js";
import Setting from "./js/setting.js";
import LocalStorage from "./js/localStorage.js";

const localStorage = new LocalStorage();

const header = new Header();
const startPage = new StartPage();
const homePage = new HomePage();
const characterPage = new CharacterPage();
const fightPage = new FightPage();
const choiseCharacterPage = new ChoiseCharacterPage();
const main = new MainView();

document.body.append(main.element);
main.setContent(startPage.element);

startPage.buttonCreate.element.addEventListener("click", () => {
  if (startPage.inputName.element.value) {
    localStorage.saveName(startPage.inputName.element.value);
    document.body.append(header.element);
    main.setContent(homePage.element);
  }
});

/*------header-controls---------*/

header.iconHome.element.addEventListener("click", () => {
  header.namePage.element.textContent = "Main";
  main.setContent(homePage.element);
});

header.iconProfile.element.addEventListener("click", () => {
  header.namePage.element.textContent = "Character";
  main.setContent(characterPage.element);
});

header.iconSettings.element.addEventListener("click", () => {
  header.namePage.element.textContent = "Setting";
  const setting = new Setting(localStorage);
  main.setContent(setting.element);
});

/*------------------------------*/

homePage.buttonFight.element.addEventListener("click", () => {
  main.setContent(fightPage.element);
  header.namePage.element.textContent = "Battle";
  const namePlayer = localStorage.getName();
  fightPage.nameMyCharachter.element.textContent = namePlayer;
});

// main.setContent(choiseCharacterPage.element);

// setTimeout(() => {
//   main.setContent(homePage.element);
// }, 5000);
