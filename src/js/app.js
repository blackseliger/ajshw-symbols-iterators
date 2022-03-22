export default class Team {
  constructor() {
    this.members = new Set();
    this.arrayMembers = [];
  }

  add(type) {
    return this.members.add(type);
  }

  addAll(...rest) {
    [...rest].forEach((type) => this.add(type));
  }

  toArray() {
    this.arrayMembers = [...this.members];
  }

  [Symbol.iterator]() {
    const membersArray = this.toArray();
    let current = 0;
    const last = membersArray.length - 1;
    return {
      next() {
        if (current <= last) {
          current += 1;
          return {
            done: false,
            value: membersArray[current - 1],
          };
        }
        return { done: true };
      },
    };
  }
}
