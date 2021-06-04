const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        console.log(`Github: ${this.github}`);
    }
}

const newEng = new Engineer('Billy', 3, 'wllmkphrt@gmail.com', 'wllmkphrt');
newEng.printInfo();
