import numberToGold from "@/app/lib/parsers";

const { test, expect } = require("@jest/globals");

test('numberToGold converts 0 to "0g"', () => {
  expect(numberToGold(0)).toBe("0g");
});

test("numberToGold converts integer gold values", () => {
  expect(numberToGold(123)).toBe("123g");
  expect(numberToGold(1)).toBe("1g");
});

test("numberToGold converts values with silver", () => {
  expect(numberToGold(123.45)).toBe("123g 45s");
  expect(numberToGold(1.0)).toBe("1g");
  expect(numberToGold(1.01)).toBe("1g 01s");
});

test("numberToGold converts values with copper", () => {
  expect(numberToGold(123.4567)).toBe("123g 45s 67c");
  expect(numberToGold(123456.789)).toBe("123456g 78s 9c");
});

test("numberToGold handles negative numbers", () => {
  expect(numberToGold(-123.45)).toBe("-123g 45s");
});

test("numberToGold handles large numbers", () => {
  expect(numberToGold(9999999.99)).toBe("9999999g 99s");
});
