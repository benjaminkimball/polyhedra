const DICE_PATTERN = /^(\d*)d(\d+)([+|-]?\d*)$/;

exports.parse = input => {
  if (!DICE_PATTERN.test(input)) throw Error("Invalid dice input");

  const [, count, sides, modifier] = DICE_PATTERN.exec(input);

  return [parseInt(count) || 1, parseInt(sides), parseInt(modifier) || 0];
};

exports.roll = (sides, count = 1) =>
  Array.from({ length: count }).map(() =>
    Math.floor(Math.random() * sides + 1)
  );
