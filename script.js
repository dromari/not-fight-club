
import ControlsGame from "./js/controls-game.js";
import MainView from "./js/mainView.js";
import StartPage from "./js/startPage.js";
import HomePage from "./js/home-page.js";
import CharacterPage from "./js/character-page.js";

const main = new MainView();
document.body.append(main.element);

/*------Выключать на Start Page-------*/
const controlsGame = new ControlsGame ({
  tag: "header",
  cssClasses: ["header"]
})

document.body.append(controlsGame.element)

/*------------------------------------*/

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


main.setContent(characterPage.element);

// setTimeout(() => {
//   main.setContent(homePage.element);
// }, 5000);

