// DOG

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  // Bark based on size
  bark() {
    if (this.size > 60) {
      return 'Grrr! Grrr!';
    } else {
      return 'Woof! Woof';
    }
  }
}

const fang = new Dog('Fang', 'boarhound', 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog('Snowy', 'terrier', 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// RPG

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0;
    this.gold = 10;
    this.keys = 1;
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} andd causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        const bonusGold = 10;
        const bonusKey = 1;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${bonusGold} gold and ${bonusKey} key(s)`
        );
        this.xp += bonusXP;
        this.gold += bonusGold;
        this.keys += bonusKey;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
  }
}

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 130, 30);

console.log('Welcome to the adventure! Here are our heroes:');
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character('Spike', 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
