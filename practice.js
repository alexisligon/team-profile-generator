startQuestions = () => {
    inquirer.prompt(questions).then((answer) => {
        const employee = new Employee(answer.name, answer.id, answer.email);
        employee.getName();
        employee.getId();
        employee.getEmail();
        employee.getRole();
        if (answer.role == "Manager") {
            inquirer.prompt(managerQuestion).then((managerAnswer) => {
                const manager = new Manager(
                    answer.name,
                    answer.id,
                    answer.email,
                    managerAnswer.officeNumber,
                );
                employees.push(manager);
            });

        } else if (answer.role == "Engineer") {
            inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
                const engineer = new Engineer(
                    answer.name,
                    answer.id,
                    answer.email,
                    engineerAnswer.github
                );
                engineer.printInfo().printGit();
            });
        } else {
            inquirer.prompt(internQuestion).then((internAnswer) => {
                const intern = new Intern(
                    answer.name,
                    answer.id,
                    answer.email,
                    internAnswer.school
                );
                intern.printInfo().printSchool();
            });
        }
        startQuestions()
    });
};



//===============================
//NOTES/ THOUGHT PROCESS/

//start questions
//manager info questions first
//THEN what type of employee?
// engineer, intern, or generate team

//if engineer
//engineer info
//THEN add another employee??
//if yes then what type of employee??
//if no then generate team

//if intern
//intern info
//THEN add another employee??
//if yes then what type of employee??
//if no then generate team

//if generate team
//then generate team
