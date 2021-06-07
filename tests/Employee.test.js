const Employee = require("../lib/Employee");

describe("Employee class", () => {
    const employeeInstance = new Employee('lex', 1, 'gmail')

  it("getName should return employee's name", () => {
    const name = employeeInstance.getName();
    expect(name).toBe('lex');
  })
  it("getId should return employee's id", () => {

    const id = employeeInstance.getId();
    expect(id).toBe(1);
  })
});