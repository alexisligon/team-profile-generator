const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  it("getName should return employee's name", () => {
    expect(new Employee('lex', 1, 'gmail').getName()).toBe('lex');
  })});