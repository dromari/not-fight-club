import Header from "./js/header.js";
import MainView from "./js/mainView.js";
import StartPage from "./js/startPage.js";
import HomePage from "./js/home-page.js";
import CharacterPage from "./js/character-page.js";
import ChoiseCharacterPage from "./js/choise-character-page.js";
import FightPage from "./js/fight-page.js";
import Setting from "./js/setting.js";
import LocalStorage from "./js/localStorage.js";
import LogBattle from "./js/battle.js";

const localStorage = new LocalStorage();

const header = new Header();
const startPage = new StartPage();
const homePage = new HomePage();
const characterPage = new CharacterPage();
const fightPage = new FightPage();
const choiseCharacterPage = new ChoiseCharacterPage();
const setting = new Setting(localStorage);
const main = new MainView();

document.body.append(main.element);

window.onload = () => {
  if (localStorage.getName() != null) {
    document.body.append(header.element);
    main.setContent(homePage.element);
  } else {
    main.setContent(startPage.element);
  }
};

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
  setting.updateName();
  main.setContent(setting.element);
  header.namePage.element.textContent = "Setting";
});

/*------------------------------*/

homePage.buttonFight.element.addEventListener("click", () => {
  main.setContent(fightPage.element);
  header.namePage.element.textContent = "Battle";
  const namePlayer = localStorage.getName();
  fightPage.nameMyCharachter.element.textContent = namePlayer;
});

setting.btnEdit.element.addEventListener("click", () => {
  setting.playerName.element.style.display = "none";
  setting.btnEdit.element.style.display = "none";
  setting.inputName.element.style.display = "block";
  setting.btnSave.element.style.display = "block";
  const namePlayer = localStorage.getName();
  setting.inputName.element.value = namePlayer;
});

setting.btnSave.element.addEventListener("click", () => {
  localStorage.saveName(setting.inputName.element.value);
  setting.inputName.element.style.display = "none";
  setting.btnSave.element.style.display = "none";
  setting.updateName();
  main.setContent(setting.element);
  setting.playerName.element.style.display = "flex";
  setting.btnEdit.element.style.display = "flex";
});

const logBattle = new LogBattle();

// setTimeout(() => {
//   main.setContent(homePage.element);
// }, 5000);
