import data from './characters.json' with {type: "json"};

import BaseElement from "./base-element.js";
import shuffleArray from "./utils/shuffle-array.js";
import Battle from "./battle.js";
import Dialog from "./dialog.js";

export default class FightPage extends BaseElement {
  constructor(localStorage) {
    const options = {
      tag: "div",
      cssClasses: ["fight-page"],
    };
    super(options);
    this.localStorage = localStorage;
    this.checkInputAttack;
    this.checkInputDefence;
    this.zoneInputDefence = [];
    this.zoneInputAttack = [];
    this.createView();
    this.nameMyCharachter;
    this.checkAttack;
    this.checkDefence;
  }

  initFight() {
    if (this.localStorage.getMyCharacter()) {
      this.myCharacter = this.localStorage.getMyCharacter();
    } else {
      this.myCharacter = structuredClone(data[3]);
      this.localStorage.saveMyCharacter(this.myCharacter);
      this.localStorage.saveLoses(0);
      this.localStorage.saveWins(0);
    }
    const shuffleData = shuffleArray(data);
    this.enemy = shuffleData[0];
    this.configureCharacter();
    this.battle = new Battle(this.myCharacter, this.enemy);
    this.localStorage.saveLeftoverMyHealth(this.myCharacter.leftoverHealth);
    this.localStorage.saveLeftoverEnemy(this.enemy.leftoverHealth);
  }

  configureCharacter() {
    this.myCharacter.zoneAttack = 1;
    this.myCharacter.zoneDefence = 2;
  }

  updateView() {
    this.nameMyCharachter.element.textContent = this.localStorage.getName();
    this.myCharachterImg.element.src = this.localStorage.getMyCharacter().url;
    this.lineHealthMyCharacter.element.max =
      this.localStorage.getMyCharacter().health;
    this.lineHealthMyCharacter.element.value =
      this.localStorage.getMyCharacter().leftoverHealth;
    this.dataHealthMyCharacter.element.textContent = `${
      this.localStorage.getMyCharacter().leftoverHealth
    } / ${this.localStorage.getMyCharacter().health}`;

    this.nameEnemy.element.textContent = this.enemy.name;
    this.enemyImg.element.src = this.enemy.url;
    this.lineHealthEnemy.element.max = this.enemy.health;
    this.lineHealthEnemy.element.value = this.enemy.leftoverHealth;
    this.dataHealthEnemy.element.textContent = `${this.enemy.leftoverHealth} / ${this.enemy.health}`;

    this.constainerLogFight.element.innerHTML = "";
  }

  createView() {
    this.dialog = new Dialog();

    const wrapperFightPage = new BaseElement({
      tag: "div",
      cssClasses: ["wrapper-fight-page"],
    });

    this.element.append(wrapperFightPage.element, this.dialog.element);

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
      text: "",
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
        src: "",
        alt: "img",
      },
    });

    myCharachterImgContainer.element.append(this.myCharachterImg.element);

    this.lineHealthMyCharacter = new BaseElement({
      tag: "progress",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-my-character",
        max: "",
        value: "",
      },
    });

    this.dataHealthMyCharacter = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-my-character"],
      text: "",
    });

    healthMyCharachter.element.append(
      this.lineHealthMyCharacter.element,
      this.dataHealthMyCharacter.element
    );

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

    enemyContainer.element.append(
      this.nameEnemy.element,
      enemyImgContainer.element,
      healthEnemy.element
    );

    this.enemyImg = new BaseElement({
      tag: "img",
      cssClasses: ["enemy-img"],
      attributes: {
        src: "",
        alt: "img",
      },
    });

    enemyImgContainer.element.append(this.enemyImg.element);

    this.lineHealthEnemy = new BaseElement({
      tag: "progress",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-enemy",
        max: "",
        value: "",
      },
    });

    this.dataHealthEnemy = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-enemy"],
      text: "",
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
        } else {
          this.buttonAttack.element.disabled = true;
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
      this.localStorage.saveLeftoverMyHealth(this.myCharacter.leftoverHealth);
      this.localStorage.saveLeftoverEnemy(this.enemy.leftoverHealth);

      this.dataHealthEnemy.element.textContent = `${this.enemy.leftoverHealth} / ${this.enemy.health}`;
      this.dataHealthMyCharacter.element.textContent = `${this.myCharacter.leftoverHealth} / ${this.myCharacter.health}`;
      this.lineHealthMyCharacter.element.value =
        this.myCharacter.leftoverHealth;
      this.lineHealthEnemy.element.value = this.enemy.leftoverHealth;

      this.textLogBattle[0].forEach((log) => {
        const logBattle = new BaseElement({
          tag: "p",
          cssClasses: ["log-fight-first-line"],
          text: "",
        });
        this.constainerLogFight.element.append(logBattle.element);

        const logElArr = log.split(" ");
        logElArr.forEach((logWord, index) => {
          const span = new BaseElement({
            tag: "span",
            cssClasses: ["span", `my-character-${index}`],
            text: logWord,
          });
          logBattle.element.append(span.element);
        });
      });

      this.textLogBattle[1].forEach((log) => {
        const logBattle = new BaseElement({
          tag: "p",
          cssClasses: ["log-fight-second-line"],
          text: "",
        });
        this.constainerLogFight.element.append(logBattle.element);

        const logElArr = log.split(" ");
        logElArr.forEach((logWord, index) => {
          const span = new BaseElement({
            tag: "span",
            cssClasses: ["span", `enemy-${index}`],
            text: logWord,
          });
          logBattle.element.append(span.element);
        });
      });

      if (
        this.myCharacter.leftoverHealth <= 0 ||
        this.enemy.leftoverHealth <= 0
      ) {
        if (this.myCharacter.leftoverHealth <= 0) {
          this.lineHealthMyCharacter.element.value = 0;
          this.dataHealthMyCharacter.element.textContent = `${0} / ${
            this.myCharacter.health
          }`;
          this.dialog.textDialog.element.textContent = "You losed! Don't be upset. Try again.";

          this.localStorage.saveLoses(Number(this.localStorage.getLoses()) + 1);
        } else {
          this.lineHealthMyCharacter.element.value = 0;
          this.dataHealthEnemy.element.textContent = `${0} / ${
            this.enemy.health
          }`;
          this.dialog.textDialog.element.textContent = "Congratulations! You win. Try again.";

          this.localStorage.saveWins(Number(this.localStorage.getWins()) + 1);
        }
        this.buttonAttack.element.disabled = true;
        this.dialog.element.style.display = "flex";
        this.dialog.element.showModal();
        
      }

       this.constainerLogFight.scrollTop = this.constainerLogFight.scrollHeigth;
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
