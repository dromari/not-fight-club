import data from './characters.json' with {type: "json"};

import BaseElement from "./base-element.js";
import shuffleArray from "./utils/shuffle-array.js";
import Battle from "./battle.js";

export default class FightPage extends BaseElement {
  constructor() {
    const options = {
      tag: "div",
      cssClasses: ["fight-page"],
    };
    super(options);

    this.checkInputAttack;
    this.checkInputDefence;
    this.zoneInputDefence = [];
    this.zoneInputAttack = [];
    this.initFight();
    this.createView();
    this.nameMyCharachter;
    this.checkAttack;
    this.checkDefence;
  }

  initFight() {
    this.configureCharacter();
    this.battle = new Battle(this.myCharacter, this.enemy);
  }

  configureCharacter() {
    const shuffleData = shuffleArray(data);
    this.enemy = shuffleData[0];
    this.myCharacter = structuredClone(data[2]);
    this.myCharacter.zoneAttack = 1;
    this.myCharacter.zoneDefence = 2;
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

    this.constainerLogFight = new BaseElement({
      tag: "div",
      cssClasses: ["container-log-fight"],
    });

    wrapperFightPage.element.append(
      constainerBattlefield.element,
      this.constainerLogFight.element
    );

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

    constainerBattlefield.element.append(
      myCharachterContainer.element,
      battleManagement.element,
      enemyContainer.element
    );

    this.nameMyCharachter = new BaseElement({
      tag: "div",
      cssClasses: ["name-my-character"],
      text: this.myCharacter.name,
    });

    const myCharachterImgContainer = new BaseElement({
      tag: "div",
      cssClasses: ["my-character-img-container"],
    });

    const healthMyCharachter = new BaseElement({
      tag: "div",
      cssClasses: ["health-my-character"],
    });

    myCharachterContainer.element.append(
      this.nameMyCharachter.element,
      myCharachterImgContainer.element,
      healthMyCharachter.element
    );

    this.myCharachterImg = new BaseElement({
      tag: "img",
      cssClasses: ["my-character-img"],
      attributes: {
        src: this.myCharacter.url,
        alt: "img",
      },
    });

    myCharachterImgContainer.element.append(this.myCharachterImg.element);

    this.lineHealthMyCharacter = new BaseElement({
      tag: "progress",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-my-character",
        max: this.myCharacter.health,
        value: this.myCharacter.leftoverHealth,
      },
    });

    this.dataHealthMyCharacter = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-my-character"],
      text: `${this.myCharacter.leftoverHealth} / ${this.myCharacter.health}`,
    });

    healthMyCharachter.element.append(
      this.lineHealthMyCharacter.element,
      this.dataHealthMyCharacter.element
    );

    this.nameEnemy = new BaseElement({
      tag: "div",
      cssClasses: ["name-enemy"],
      text: this.enemy.name,
    });

    const enemyImgContainer = new BaseElement({
      tag: "div",
      cssClasses: ["enemy-img-container"],
    });

    const healthEnemy = new BaseElement({
      tag: "div",
      cssClasses: ["health-enemy"],
    });

    enemyContainer.element.append(
      this.nameEnemy.element,
      enemyImgContainer.element,
      healthEnemy.element
    );

    this.enemyImg = new BaseElement({
      tag: "img",
      cssClasses: ["enemy-img"],
      attributes: {
        src: this.enemy.url,
        alt: "img",
      },
    });

    enemyImgContainer.element.append(this.enemyImg.element);

    this.lineHealthEnemy = new BaseElement({
      tag: "progress",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-enemy",
        max: this.enemy.health,
        value: this.enemy.leftoverHealth,
      },
    });

    this.dataHealthEnemy = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-enemy"],
      text: `${this.enemy.leftoverHealth} / ${this.enemy.health}`,
    });

    healthEnemy.element.append(
      this.lineHealthEnemy.element,
      this.dataHealthEnemy.element
    );

    const fightConditions = new BaseElement({
      tag: "p",
      cssClasses: ["fight-conditions"],
      text: "Please pick 1 Attack zone and 2 Defence zones",
    });

    const containerSettingFight = new BaseElement({
      tag: "div",
      cssClasses: ["container-setting-fight"],
    });

    containerSettingFight.element.addEventListener("click", (e) => {
      if (e.target.classList.contains("input-zone")) {
        const checkedInputAttack = this.zoneInputAttack
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.textContent);
        this.myCharacter.zonesAttack = checkedInputAttack;
        this.checkInputAttack = checkedInputAttack.length;

        const checkedInputDefence = this.zoneInputDefence
          .filter((checkbox) => checkbox.checked)
          .map((checkbox) => checkbox.textContent);
        this.myCharacter.zonesDefence = checkedInputDefence;
        this.checkInputDefence = checkedInputDefence.length;

        if (this.checkInputAttack == 1 && this.checkInputDefence == 2) {
          this.buttonAttack.element.disabled = false;
        }
      }
    });

    this.buttonAttack = new BaseElement({
      tag: "button",
      cssClasses: ["button-attack"],
      text: "Attack!",
      attributes: {
        disabled: "",
      },
    });

    this.buttonAttack.element.addEventListener("click", () => {
      const arrZones = ["head", "neck", "body", "belly", "legs"];
      let shuffleZones = shuffleArray(arrZones);
      this.enemy.zonesAttack = shuffleZones.slice(-this.enemy.zoneAttack);
      shuffleZones = shuffleArray(arrZones);
      this.enemy.zonesDefence = shuffleZones.slice(-this.enemy.zoneDefence);
      this.textLogBattle = this.battle.battle();
      this.dataHealthEnemy.element.textContent = `${this.enemy.leftoverHealth} / ${this.enemy.health}`;
      this.dataHealthMyCharacter.element.textContent = `${this.myCharacter.leftoverHealth} / ${this.myCharacter.health}`;
      this.lineHealthMyCharacter.element.value =
      this.myCharacter.leftoverHealth;
      this.lineHealthEnemy.element.value = this.enemy.leftoverHealth;
      const containerTextFirstLine = new BaseElement({
        tag: "p",
        cssClasses: ["log-fight-first-line"],
        text: this.textLogBattle[0],
      });

      const containerTextSecondLine = new BaseElement({
        tag: "p",
        cssClasses: ["log-fight-second-line"],
        text: this.textLogBattle[1],
      });

      this.constainerLogFight.element.append(
        containerTextFirstLine.element,
        containerTextSecondLine.element
      );
    });

    battleManagement.element.append(
      fightConditions.element,
      containerSettingFight.element,
      this.buttonAttack.element
    );

    this.containerAttackZones = new BaseElement({
      tag: "div",
      cssClasses: ["container-attack-zones"],
    });

    this.containerDefenceZones = new BaseElement({
      tag: "div",
      cssClasses: ["container-defence-zones"],
    });

    containerSettingFight.element.append(
      this.containerAttackZones.element,
      this.containerDefenceZones.element
    );

    const arrZones = ["head", "neck", "body", "belly", "legs"];

    arrZones.forEach((zone) => {
      const containerInputLabelZone = new BaseElement({
        tag: "div",
        cssClasses: ["container-input-label-zone-attack"],
      });

      this.containerAttackZones.element.append(containerInputLabelZone.element);

      const input = new BaseElement({
        tag: "input",
        cssClasses: ["input-zone"],
        text: zone,
        attributes: {
          id: `${zone}-attack`,
          type: "checkbox",
        },
      });

      this.zoneInputAttack.push(input.element);

      const zoneLabel = new BaseElement({
        tag: "label",
        cssClasses: ["label-zone"],
        text: zone,
        attributes: {
          for: `${zone}-attack`,
        },
      });

      containerInputLabelZone.element.append(input.element, zoneLabel.element);
    });

    arrZones.forEach((zone) => {
      const containerInputLabelZone = new BaseElement({
        tag: "div",
        cssClasses: ["container-input-label-zone-defence"],
      });

      this.containerDefenceZones.element.append(
        containerInputLabelZone.element
      );

      const input = new BaseElement({
        tag: "input",
        cssClasses: ["input-zone"],
        text: zone,
        attributes: {
          id: `${zone}-defence`,
          type: "checkbox",
        },
      });

      this.zoneInputDefence.push(input.element);

      const zoneLabel = new BaseElement({
        tag: "label",
        cssClasses: ["label-zone"],
        text: zone,
        attributes: {
          for: `${zone}-defence`,
        },
      });

      containerInputLabelZone.element.append(input.element, zoneLabel.element);
    });
  }
}
