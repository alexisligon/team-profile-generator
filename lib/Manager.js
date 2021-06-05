const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        console.log(`Office Number: ${this.officeNumber}`);
    }
}

newManager.printInfo();

module.exports = Manager;