import Team from '../js/app';

test('should add one type', () => {
  const expected = new Set().add('Swordsman');
  const result = new Team().add('Swordsman');
  expect(result).toEqual(expected);
});

test('should add all types', () => {
  const expected = new Set();
  expected.add('Swordsman');
  expected.add('Daemon');
  expected.add('Zombie');
  const result = new Team();
  result.addAll('Swordsman', 'Daemon', 'Zombie');
  expect(result.members).toEqual(expected);
});

test('should toArray this.memvers to this.arrayMembers', () => {
  const expected = ['Swordsman', 'Daemon', 'Zombie'];
  const result = new Team();
  result.addAll('Swordsman', 'Daemon', 'Zombie');
  result.toArray();
  expect(result.arrayMembers).toEqual(expected);
});
