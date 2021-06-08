const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const { generateCard } = require('./generateEmployee')

const employees = [];

//questions for information of all employees
const managerQuestions = [
    {
        type: "input",
        message: "Enter the team manager's name.",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter the manager's ID.",
        name: "managerID",
    },
    {
        type: "input",
        message: "Enter the manager's email.",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "Enter the manager's office phone number.",
        name: "officeNumber",
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern", "Generate Team"],
    }
];

//engineer specific question
const engineerQuestion = [
    {
        type: "input",
        message: "Enter the engineer's name.",
        name: "engName",
    },
    {
        type: "input",
        message: "Enter the engineer's ID.",
        name: "engID"
    },
    {
        type: "input",
        message: "Enter the engineer's email.",
        name: "engEmail"
    },
    {
        type: "input",
        message: "Enter the engineer's github username.",
        name: "github",
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern", "Generate Team"],
    }

];

//intern specific question
const internQuestion = [
    {
        type: "input",
        message: "Enter the intern's name.",
        name: "intName",
    },
    {
        type: "input",
        message: "Enter the intern's ID.",
        name: "intID"
    },
    {
        type: "input",
        message: "Enter the intern's email.",
        name: "intEmail"
    },
    {
        type: "input",
        message: "Enter the intern's school.",
        name: "school",
    },
    {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern", "Generate Team"],
    }
];

function working() {
    console.log("working!!!!");
}

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
