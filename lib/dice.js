const dice = (module.exports = (sides, count = 1) =>
  [...Array(count).keys()].map(() => Math.floor(Math.random() * sides + 1)));

dice.d4 = count => dice(4, count);

dice.d6 = count => dice(6, count);

dice.d8 = count => dice(8, count);

dice.d10 = count => dice(10, count);

dice.d12 = count => dice(12, count);

dice.d20 = count => dice(20, count);

dice.d100 = count => dice(100, count);
