
import ControlsGame from "./js/controls-game.js";
import MainView from "./js/mainView.js";
import StartPage from "./js/startPage.js";
import HomePage from "./js/home-page.js";
import CharacterPage from "./js/character-page.js";
import ChoiseCharacterPage from "./js/choise-character-page.js";
import FightPage from "./js/fight-page.js";


/*------Выключать на Start Page-------*/
const controlsGame = new ControlsGame ({
  tag: "header",
  cssClasses: ["header"]
})

document.body.append(controlsGame.element)

/*------------------------------------*/


const main = new MainView();
document.body.append(main.element);

const startPage = new StartPage({
  tag: "div",
  cssClasses: ["start-page"],
});

const homePage = new HomePage({
  tag: "div",
  cssClasses: ["home-page"],
});

const characterPage = new CharacterPage({
  tag: "div",
  cssClasses: ["character-page"],
});

const choiseCharacterPage = new ChoiseCharacterPage({
  tag: "div",
  cssClasses: ["choise-character-page"]
})

const fightPage = new FightPage ({
  tag: "div",
  cssClasses: ["fight-page"]
})


main.setContent(fightPage.element);

// setTimeout(() => {
//   main.setContent(homePage.element);
// }, 5000);

