const Manager = require("../lib/Manager");

describe("Manager class", () => {
    const employeeInstance = new Manager('lex', 1, 'gmail', 1234567);

    it("getOfficeNumber should return manager's office number", () => {
        const officeNumber = employeeInstance.getOfficeNumber();
        expect(officeNumber).toBe(1234567);
    });

    it("getRole should return manager role", () => {
        const role = employeeInstance.getRole();
        expect(role).toBe('Manager');
      });
})