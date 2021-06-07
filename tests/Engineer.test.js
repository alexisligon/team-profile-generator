const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  const employeeInstance = new Engineer('lex', 1, 'gmail', 'iLoveGitHub');

  it("getGit should return engineer's github username", () => {
    const userName = employeeInstance.getGit();
    expect(userName).toBe('iLoveGitHub');
  });
  
  it("getRole should return engineer role", () => {
    const role = employeeInstance.getRole();
    expect(role).toBe('Engineer');
  });
})