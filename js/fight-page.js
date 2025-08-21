import data from './characters.json' with {type: "json"};
import damage from './damage.json' with {type: "json"};
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
    const shuffleData = shuffleArray(data);
    this.enemy = shuffleData[0];
    this.myCharacter = data[3];
    this.battle = new Battle(
      this.myCharacter,
      this.enemy,
      this.zoneInputAttack,
      this.zoneInputDefence
    );
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

    wrapperFightPage.element.append(
      constainerBattlefield.element,
      constainerLogFight.element
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

    const lineHealthMyCharacter = new BaseElement({
      tag: "input",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-my-character",
        type: "range",
        min: "0",
        max: this.myCharacter.health,
        value: this.myCharacter.health,
      },
    });

    const dataHealthMyCharacter = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-my-character"],
      text: `${this.myCharacter.health} / ${this.myCharacter.health}`,
    });

    healthMyCharachter.element.append(
      lineHealthMyCharacter.element,
      dataHealthMyCharacter.element
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
      tag: "input",
      cssClasses: ["line-health"],
      attributes: {
        id: "health-enemy",
        type: "range",
        min: "0",
        max: this.enemy.health,
        value: this.enemy.health,
      },
    });

    this.dataHealthEnemy = new BaseElement({
      tag: "span",
      cssClasses: ["data-health-enemy"],
      text: `${this.enemy.health} / ${this.enemy.health}`,
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

    // containerSettingFight.element.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("input-zone")) {

    //     this.containerAttackZones.element.addEventListener("click", (e) => {
    //       if (e.target.classList.contains("input-zone")) {
    //         const checkedInputs = this.zoneInputAttack.filter(
    //           (checkbox) => checkbox.checked
    //         );
    //         this.checkInputAttack = checkedInputs.length;
    //         console.log(this.checkInputAttack);
    //       }
    //     });

    //     this.containerDefenceZones.element.addEventListener("click", (e) => {
    //       if (e.target.classList.contains("input-zone")) {
    //         const checkedInput = this.zoneInputDefence.filter(
    //           (checkbox) => checkbox.checked
    //         );
    //         this.checkInputDefence = checkedInput.length;
    //         console.log(this.checkInputDefence);
    //       }
    //     });

    //     if(this.checkInputAttack == 1 && this.checkInputDefence == 2) {
    //       console.log('yyy')
    //       this.buttonAttack.disabled = false;
    //     }
    //   }
    // });

    containerSettingFight.element.addEventListener("click", (e) => {
      if (e.target.classList.contains("input-zone")) {
        const checkedInputs = this.zoneInputAttack.filter(
          (checkbox) => checkbox.checked
        );
        this.checkInputAttack = checkedInputs.length;

        const checkedInput = this.zoneInputDefence.filter(
          (checkbox) => checkbox.checked
        );
        this.checkInputDefence = checkedInput.length;
      
        if (this.checkInputAttack == 1 && this.checkInputDefence == 2) {
          console.log("yyy");
          console.log()
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
      //Обновить вьюшку myCharacter и myEnemy;
      //Обновить log;
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

    // this.containerAttackZones.element.addEventListener('click', (e) => {
    //   if(e.target.classList.contains('input-zone')) {
    //    const checkedInputs = this.zoneInputAttack.filter(checkbox => checkbox.checked);
    //    this.checkInputAttack = checkedInputs.length;
    //     console.log(this.checkInputAttack)
    //   }
    // })

    this.containerDefenceZones = new BaseElement({
      tag: "div",
      cssClasses: ["container-defence-zones"],
    });

    // this.containerDefenceZones.element.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("input-zone")) {
    //     const checkedInput = this.zoneInputDefence.filter(
    //       (checkbox) => checkbox.checked
    //     );
    //     this.checkInputDefence = checkedInput.length;
    //     console.log(this.checkInputDefence);
    //   }
    // });

    containerSettingFight.element.append(
      this.containerAttackZones.element,
      this.containerDefenceZones.element
    );

    const arrZonesAttack = Object.keys(damage[0].attackZones);

    const arrZonesDefence = Object.keys(damage[1].defenceZones);

    arrZonesAttack.forEach((zone) => {
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
          value: damage[0].attackZones[zone],
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

    arrZonesDefence.forEach((zone) => {
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
          value: damage[1].defenceZones[zone],
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
