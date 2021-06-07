const Intern = require("../lib/Intern");

describe("Intern class", () => {
    const employeeInstance = new Intern('lex', 1, 'gmail', 'UNC Chapel Hill')

    it("getSchool should return intern's school", () => {
        const school = employeeInstance.getSchool();
        expect(school).toBe('UNC Chapel Hill');
    })
})