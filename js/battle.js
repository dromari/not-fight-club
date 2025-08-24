export default class Battle {
  constructor(myCharacter, enemy) {
    this.myCharacter = myCharacter;
    this.enemy = enemy;
  }

  battle() {
    const a = this.attack(this.myCharacter, this.enemy);
    const b = this.attack(this.enemy, this.myCharacter);
    return [a, b];
  }

  attack(myCharacter, enemy) {
    let result = [];
    myCharacter.zonesAttack.forEach((zone) => {
      if (enemy.zonesDefence.includes(zone)) {
        result.push(`${myCharacter.name} hit ${enemy.name} to ${zone}, but ${enemy.name} blocked hit`);
      } else {
        enemy.leftoverHealth = enemy.leftoverHealth - myCharacter.damage;
        result.push(`${myCharacter.name} hit ${enemy.name} to ${zone} and caused ${myCharacter.damage} damage`);
      }        
    });
    return result;
  }
}
