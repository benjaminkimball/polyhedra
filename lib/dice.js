const roll = (sides, count = 1) =>
  [...Array(count).keys()].map(() => Math.floor(Math.random() * sides + 1));

const dice = (module.exports = roll);

dice.d4 = count => roll(4, count);

dice.d6 = count => roll(6, count);

dice.d8 = count => roll(8, count);

dice.d10 = count => roll(10, count);

dice.d12 = count => roll(12, count);

dice.d20 = count => roll(20, count);

dice.d100 = count => roll(100, count);
