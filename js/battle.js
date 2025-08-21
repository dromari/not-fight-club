export default class Battle {
  constructor(myCharacter, enemy) {
    this.myCharacter = myCharacter;
    this.enemy = enemy;
  }

  battle() {
    this.attack(this.myCharacter, this.enemy);
    this.attack(this.enemy, this.myCharacter);
   
  }

  attack(myCharacter, enemy) {
    myCharacter.zonesAttack.forEach(zone => {
      if(enemy.zonesDefence.includes(zone)){
        console.log(`${myCharacter.name} hit ${enemy.name} to ${zone}, but ${enemy.name} blocked hit`)
      } else {
        console.log(`${myCharacter.name} hit ${enemy.name} to ${zone} and caused ${myCharacter.damage} damage`)
        enemy.leftoverHealth = enemy.leftoverHealth - myCharacter.damage;
      }
    });

  }
}
