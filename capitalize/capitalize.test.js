const capitalize = require("./capitalize.js");

test("CAPITALIZE TEST 1", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  
  test("CAPITALIZE TEST 2", () => {
    expect(capitalize("how are you?")).toBe("How are you?");
  });
  
  test("CAPITALIZE TEST 3", () => {
    expect(capitalize("hAVE A NICE DAY!")).toBe(
      "HAVE A NICE DAY!"
    );
  });
  
  test("CAPITALIZE TEST 4", () => {
    expect(capitalize("taKe CaRe")).toBe("TaKe CaRe");
  });