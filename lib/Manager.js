const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        console.log(`Office Number: ${this.officeNumber}`);
    }
}

const newManager = new Manager('Christin', 4, 'christin@gmail.com', '52');
newManager.printInfo();