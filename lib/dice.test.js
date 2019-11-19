const { assert } = require("chai");
const { describe, it } = require("mocha");

const dice = require("./dice");

describe("dice(sides, count, seed)", () => {
  it("generates a random integer between 1 and the supplied number", () => {
    const [result] = dice(4);

    assert.isAtLeast(result, 1);
    assert.isAtMost(result, 4);
  });

  it("allows multiple integers to be generated at once", () => {
    const results = dice(4, 2);

    assert.lengthOf(results, 2);
  });

  describe("dice.d4(count)", () => {
    it("generates a random integer between 1-4", () => {
      const [result] = dice.d4();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 4);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d4(2);

      assert.lengthOf(results, 2);
    });
  });

  describe("dice.d6(count)", () => {
    it("generates a random integer between 1-6", () => {
      const [result] = dice.d6();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 6);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d6(2);

      assert.lengthOf(results, 2);
    });
  });

  describe("dice.d8(count)", () => {
    it("generates a random integer between 1-8", () => {
      const [result] = dice.d8();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 8);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d8(2);

      assert.lengthOf(results, 2);
    });
  });

  describe("dice.d10(count)", () => {
    it("generates a random integer between 1-10", () => {
      const [result] = dice.d10();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 10);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d10(2);

      assert.lengthOf(results, 2);
    });
  });

  describe("dice.d12(count)", () => {
    it("generates a random integer between 1-12", () => {
      const [result] = dice.d12();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 12);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d12(2);

      assert.lengthOf(results, 2);
    });
  });

  describe("dice.d20(count)", () => {
    it("generates a random integer between 1-20", () => {
      const [result] = dice.d20();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 20);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d20(2);

      assert.lengthOf(results, 2);
    });
  });

  describe("dice.d100(count)", () => {
    it("generates a random integer between 1-100", () => {
      const [result] = dice.d100();

      assert.isAtLeast(result, 1);
      assert.isAtMost(result, 100);
    });

    it("allows multiple integers to be generated at once", () => {
      const results = dice.d100(2);

      assert.lengthOf(results, 2);
    });
  });
});
