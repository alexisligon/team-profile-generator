const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        console.log(`School: ${this.school}`);
    }
}

const newIntern = new Intern('Emily', 3, 'emily@gmail.com', 'UNCG');
newIntern.printInfo();