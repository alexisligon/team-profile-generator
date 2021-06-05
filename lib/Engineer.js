const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    returnGithub() {
        console.log(`Github: ${this.github}`);
        return this.github;
    }
}

newEng.printInfo();

module.exports = Engineer;

//for tests, returnGithub

//call engineer, make sure object returns

//typeof
