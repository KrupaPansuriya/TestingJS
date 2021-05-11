const calculator = require("./calculator");

test("CALCULATOR TEST 1", () => {
    expect(calculator.add(10, 20)).toBe(30);
  });
  
  test("CALCULATOR TEST 2", () => {
    expect(calculator.sub(15, 41)).toBe(-26);
  });
  
  test("CALCULATOR TEST 3", () => {
    expect(calculator.div(12, 4)).toBe(3);
  });
  
  test("CALCULATOR TEST 4", () => {
    expect(calculator.mul(10, 25)).toBe(250);
  });