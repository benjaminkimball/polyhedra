const dice = require("./dice");

describe("dice(sides, count)", () => {
  it("generates a random integer between 1 and the supplied number", () => {
    expect.assertions(2);

    const [result] = dice(4);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(4);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice(4, 2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d4(count)", () => {
  it("generates a random integer between 1-4", () => {
    expect.assertions(2);

    const [result] = dice.d4();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(4);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d4(2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d6(count)", () => {
  it("generates a random integer between 1-6", () => {
    expect.assertions(2);

    const [result] = dice.d6();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d6(2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d8(count)", () => {
  it("generates a random integer between 1-8", () => {
    expect.assertions(2);

    const [result] = dice.d8();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(8);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d8(2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d10(count)", () => {
  it("generates a random integer between 1-10", () => {
    expect.assertions(2);

    const [result] = dice.d10();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d10(2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d12(count)", () => {
  it("generates a random integer between 1-12", () => {
    expect.assertions(2);

    const [result] = dice.d12();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(12);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d12(2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d20(count)", () => {
  it("generates a random integer between 1-20", () => {
    expect.assertions(2);

    const [result] = dice.d20();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(20);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d20(2);

    expect(results).toHaveLength(2);
  });
});

describe("dice.d100(count)", () => {
  it("generates a random integer between 1-100", () => {
    expect.assertions(2);

    const [result] = dice.d100();

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(100);
  });

  it("allows multiple integers to be generated at once", () => {
    expect.assertions(1);

    const results = dice.d100(2);

    expect(results).toHaveLength(2);
  });
});
