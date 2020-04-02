const { parse, roll } = require("./dice");

describe("parse()", () => {
  it("returns the dice count, number of sides, and modifier", () => {
    expect.assertions(1);

    const result = parse("1d6+4");

    expect(result).toStrictEqual([1, 6, 4]);
  });

  it("returns a negative modifier", () => {
    expect.assertions(1);

    const result = parse("1d4-1");

    expect(result).toStrictEqual([1, 4, -1]);
  });

  it("returns a default dice count and modifier", () => {
    expect.assertions(1);

    const result = parse("d6");

    expect(result).toStrictEqual([1, 6, 0]);
  });

  it("throws an error when supplied an invalid input", () => {
    expect.assertions(2);

    expect(() => parse("2foo6+4")).toThrow("Invalid dice input");
    expect(() => parse("plaintext")).toThrow("Invalid dice input");
  });
});

describe("roll()", () => {
  it("generates a random integer between 1 and the supplied number", () => {
    expect.assertions(2);

    const [result] = roll(4);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(4);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = roll(4, 2);

    expect(results).toHaveLength(2);
  });
});
