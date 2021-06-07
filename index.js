const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const { generateCard } = require('./generateEmployee')

const employees = [];

//questions for information of all employees
const questions = [
    {
        type: "list",
        message: "Type of Employee",
        name: "role",
        choices: ["Manager", "Engineer", "Intern", "Generate Team"],
    },
    {
        type: "input",
        message: "Employee Name",
        name: "name",
    },
    {
        type: "input",
        message: "Employee ID",
        name: "id",
    },
    {
        type: "input",
        message: "Employee email",
        name: "email",
    },
];

//manager specific question
const managerQuestion = [
    {
        type: "input",
        message: "Manager office number",
        name: "officeNumber",
    },
];

//engineer specific question
const engineerQuestion = [
    {
        type: "input",
        message: "Engineer github",
        name: "github",
    },
];

//intern specific question
const internQuestion = [
    {
        type: "input",
        message: "Intern School",
        name: "school",
    },
];

function working() {
    console.log("working!!!!");
}

//if else for other question prompts based on type of job role
const whichRole = (answer) => {
    console.log("Role: ", answer.role);
    // if (answer.role == 'Manager') {
    //     managerInfo();
    // } else if (answer.role == 'Engineer') {
    //     inquirer.prompt(engineerQuestion);
    // } else {
    //     inquirer.prompt(internQuestion);
    // }
};

//function to start asking initial questions
//then ask specific questions based on job role answer
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
//initialize beginning questions with node index.js
startQuestions();

//function for writing file

//function for last question, loop over questions again if true,
//stop application if false
// const askLastQuestions = () => {
//     inquirer.prompt(lastQuestion).then((answer) => {

//         switch (answer.add) {
//             case true:
//                 startQuestions();
//                 break;

//             case false:
//                 console.log('Team has been built!');
//                 break;
//         }
//     })
// }

// //variable for the last question
// const lastQuestion = [
//     //add another employee?
//     {
//         type: 'confirm',
//         message: 'Add another employee?',
//         name: 'add',
//     }
// ]
