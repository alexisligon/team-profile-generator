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
       type: "confirm",
       message: "Would you like to add another employee?",
       name: "add"
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
        type: "confirm",
        message: "Would you like to add another employee?",
        name: "add"
    }
];

function working() {
    console.log("working!!!!");
}
//function for adding engineer, intern, or generate team
addOrGenerate = () => {
    inquirer.prompt(  [{
        type: "list",
        message: "What type of employee would you like to add?",
        name: "role",
        choices: ["Engineer", "Intern", "Generate Team"],
    }]
    ).then((answer) => {
        if (answer.role === "Engineer") {
            inquirer.prompt(engineerQuestion).then((engineerAnswer) => {
                const engineer = new Engineer(
                    engineerAnswer.engName,
                    engineerAnswer.engID,
                    engineerAnswer.engEmail,
                    engineerAnswer.github
                );
                engineer.getName();
                engineer.getId();
                engineer.getEmail();
                engineer.getRole();
                engineer.getGit();
                employees.push(engineer);
                if (engineerAnswer.add == true) {
                    addOrGenerate();
                } else {
                    //generate team here
                }
            });
        } else if(answer.role === "Intern") {
            inquirer.prompt(internQuestion).then((internAnswer) => {
                const intern = new Intern(
                    internAnswer.intName,
                    internAnswer.intID,
                    internAnswer.intEmail,
                    internAnswer.school,
                );
                intern.getName();
                intern.getId();
                intern.getEmail();
                intern.getRole();
                intern.getSchool();
                employees.push(intern);
                if (internAnswer.add == true) {
                    addOrGenerate();
                } else {
                    //generate team here
                }
            });
        } else {
            //generate team here
        }
    })
}

//function to start asking initial questions
startQuestions = () => {
    //start the team building by creating a manager for the team
    inquirer.prompt(managerQuestions).then((answer) => {
        const manager = new Manager(
            answer.managerName, 
            answer.managerID, 
            answer.managerEmail, 
            answer.officeNumber
            );
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getRole();
        manager.getOfficeNumber();
        employees.push(manager);
    
        addOrGenerate();
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