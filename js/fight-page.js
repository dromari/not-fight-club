import data from './characters.json' with {type: "json"};
import BaseElement from "./base-element.js";

export default class FightPage extends BaseElement {
  constructor(options) {
    super(options);
    this.createView();
    this.initFight();
  } 

  createView() {
    const wrapperFightPage = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-fight-page"],
    });

    this.element.append(wrapperFightPage.element);

    const constainerBattlefield = new BaseElement({
      tag: "div",
      cssClasses: ["container-battlefield"],
    });

    const constainerLogFight = new BaseElement({
      tag: "div",
      cssClasses: ["container-log-fight"],
    });

    wrapperFightPage.element.append(constainerBattlefield.element);
    wrapperFightPage.element.append(constainerLogFight.element);

    const myCharachterContainer = new BaseElement({
      tag: "div",
      cssClasses: ["container-my-character"],
    });

    const battleManagement = new BaseElement({
      tag: "div",
      cssClasses: ["battle-management"],
    });

    const enemyContainer = new BaseElement({
      tag: "div",
      cssClasses: ["container-enemy"],
    });

    constainerBattlefield.element.append(myCharachterContainer.element);
    constainerBattlefield.element.append(battleManagement.element);
    constainerBattlefield.element.append(enemyContainer.element);

    const nameMyCharachter = new BaseElement({
      tag: "div",
      cssClasses: ["name-my-character"],
    });

    const myCharachterImgContainer = new BaseElement({
      tag: "div",
      cssClasses: ["my-character-img-container"],
    });

    const healthMyCharachter = new BaseElement({
      tag: "div",
      cssClasses: ["health-my-character"],
    });

    myCharachterContainer.element.append(nameMyCharachter.element);
    myCharachterContainer.element.append(myCharachterImgContainer.element);
    myCharachterContainer.element.append(healthMyCharachter.element);

    this.myCharachterImg = new BaseElement({
      tag: "img",
      cssClasses: ["my-character-img"],
        attributes: {
        src: "",
        alt: "img"
      }
    });

    myCharachterImgContainer.element.append(this.myCharachterImg.element);

    const lineHealthMyCharacter = new BaseElement({
      tag: "input",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-my-character",
        type: "range",
        value: "0",
        min: "0",
        max: "100",
      },
    });

    const dataHealthMyCharacter = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-my-character"],
      text: `100`,
    });

    healthMyCharachter.element.append(lineHealthMyCharacter.element);
    healthMyCharachter.element.append(dataHealthMyCharacter.element);

    this.nameEnemy = new BaseElement({
      tag: "div",
      cssClasses: ["name-enemy"],
      text: "",
    });

    const enemyImgContainer = new BaseElement({
      tag: "div",
      cssClasses: ["enemy-img-container"],
    });

    const healthEnemy = new BaseElement({
      tag: "div",
      cssClasses: ["health-enemy"],
    });

    enemyContainer.element.append(this.nameEnemy.element);
    enemyContainer.element.append(enemyImgContainer.element);
    enemyContainer.element.append(healthEnemy.element);

    this.enemyImg = new BaseElement({
      tag: "img",
      cssClasses: ["enemy-img"],
      attributes: {
        src: "",
        alt: "img"
      }
    });

    enemyImgContainer.element.append(this.enemyImg.element)

    this.lineHealthEnemy = new BaseElement({
      tag: "input",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-enemy",
        type: "range",
        value: "0",
        min: "0",
        max: "100",
      },
    });

    this.dataHealthEnemy = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-enemy"],
      text: `100`,
    });

    healthEnemy.element.append(this.lineHealthEnemy.element);
    healthEnemy.element.append(this.dataHealthEnemy.element);

    const fightConditions = new BaseElement({
      tag: "p",
      cssClasses: ["fight-conditions"],
      text: "Please pick 1 Attack zone and 2 Defence zones",
    });

    const containerSettingFight = new BaseElement({
      tag: "div",
      cssClasses: ["container-setting-fight"],
    });

    const buttonAttack = new BaseElement({
      tag: "button",
      cssClasses: ["button-attack"],
      text: "Attack!",
    });

    battleManagement.element.append(fightConditions.element);
    battleManagement.element.append(containerSettingFight.element);
    battleManagement.element.append(buttonAttack.element);

    const containerAttackZones = new BaseElement({
      tag: "div",
      cssClasses: ["container-attack-zones"],
    });

    const containerDefenceZones = new BaseElement({
      tag: "div",
      cssClasses: ["container-defence-zones"],
    });

    containerSettingFight.element.append(containerAttackZones.element);
    containerSettingFight.element.append(containerDefenceZones.element);

    const arrZones = ["head", "neck", "body", "belly", "legs"];

    arrZones.forEach((zone) => {
      const containerInputLabelZone = new BaseElement({
        tag: "div",
        cssClasses: ["container-input-label-zone"],
      });

      containerAttackZones.element.append(containerInputLabelZone.element);

      const zoneInput = new BaseElement({
        tag: "input",
        cssClasses: ["input-zone"],
        text: zone,
        attributes: {
          id: `${zone}-attack`,
          type: "checkbox",
        },
      });

      const zoneLabel = new BaseElement({
        tag: "label",
        cssClasses: ["label-zone"],
        text: zone,
        attributes: {
          for: `${zone}-attack`,
        },
      });

      containerInputLabelZone.element.append(zoneInput.element);
      containerInputLabelZone.element.append(zoneLabel.element);
    });

    arrZones.forEach((zone) => {
      const containerInputLabelZone = new BaseElement({
        tag: "div",
        cssClasses: ["container-input-label-zone"],
      });

      containerDefenceZones.element.append(containerInputLabelZone.element);

      const zoneInput = new BaseElement({
        tag: "input",
        cssClasses: ["input-zone"],
        text: zone,
        attributes: {
          id: `${zone}-defence`,
          type: "checkbox",
        },
      });

      const zoneLabel = new BaseElement({
        tag: "label",
        cssClasses: ["label-zone"],
        text: zone,
        attributes: {
          for: `${zone}-defence`,
        },
      });

      containerInputLabelZone.element.append(zoneInput.element);
      containerInputLabelZone.element.append(zoneLabel.element);
    });
  }

  shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }}

  initFight() {
    this.shuffleArray(data)
    this.enemy = data[0];
    this.nameEnemy.element.textContent = this.enemy.name;   
    this.lineHealthEnemy.element.max = this.enemy.health;
    this.lineHealthEnemy.element.value =  this.enemy.health;
    this.dataHealthEnemy.element.textContent = `${this.enemy.health} / ${this.enemy.health}`;
    this.enemyImg.element.src = this.enemy.url;
    
    
    this.myCharacter;

    //взять данные из json
    //создать два поля: мой перс и врага (инициализировать какие рандомные) 
    //заполнить вьюшку данными персонажа
    //заполнить вьюшку данными врага
  }

//   fight() {

//   }
}
