import damage from './damage.json' with {type: "json"};

export default class Battle {
  constructor(myCharacter, enemy, zoneInputAttack, zoneInputDefence) {
    this.myCharacter = myCharacter;
    this.enemy = enemy;
    this.zoneInputAttack = zoneInputAttack;
    this.zoneInputDefence = zoneInputDefence;
  }

  battle(){
   
    console.log(Object.entries(damage[0].attackZones))
    console.log(Object.keys(damage[0].attackZones))
    console.log(Object.values(damage[0].attackZones))
   
    console.log(this.zoneInputDefence)
  }
}
