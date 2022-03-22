/* eslint-disable no-underscore-dangle */

export default class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  static listTypes = [
    'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
  ];

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.length <= 2 || value.length >= 10) {
      throw new Error(` name : ${value} должно быть строкой от 2 до 10 символов включительно.`);
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (typeof value !== 'string' || !Character.listTypes.includes(value)) {
      throw new Error(`type :${value} должно быть строкой или известным типом`);
    }
    this._type = value;
  }
}
