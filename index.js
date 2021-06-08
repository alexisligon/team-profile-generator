const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array for new employees to be pushed to
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

generateTeam = () => {
    fs.appendFile('./dist/team.html',
        `
    </body>
    </html>`,
        (err) => err ? console.log(err) : console.log('Team has been built!'))
}

writeFile = () => {

}
//function for adding engineer, intern, or generate team
addOrGenerate = () => {
    inquirer.prompt([{
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

                fs.appendFile('./dist/team.html',
                `
                <div>
                <div>
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}</h3>
                </div>

                <!--card info section-->
                <div>
                    <ul>
                    <li>ID: ${engineer.getId()}</li>
                    <!--link to email-->
                    <li>EMAIL: ${engineer.getEmail()}</li>
                    <li>Github: ${engineer.getGit()}</li>
                    </ul>
                </div>
                </div>

                `, 
                (err) => err ? console.log(err) : console.log('Successfully added employee!'))

                if (engineerAnswer.add == true) {
                    addOrGenerate();
                } else {
                    //generate team here
                    generateTeam();
                }
            });
        } else if (answer.role === "Intern") {
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

                fs.appendFile('./dist/team.html',
                `
                <div>
                <div>
                    <h2>${intern.getName()}</h2>
                    <h3>${intern.getRole()}</h3>
                </div>

                <!--card info section-->
                <div>
                    <ul>
                    <li>ID: ${intern.getId()}</li>
                    <!--link to email-->
                    <li>Email: ${intern.getEmail()}</li>
                    <li>School: ${intern.getSchool()}</li>
                    </ul>
                </div>
                </div>
                
                `, 
                (err) => err ? console.log(err) : console.log('Successfully added employee!'))
                if (internAnswer.add == true) {
                    addOrGenerate();
                } else {
                    //generate team here
                    generateTeam();
                }
            });
        } else {
            //generate team here
            generateTeam();
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

        fs.writeFile('./dist/team.html',
            `
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
  </head>
  <body>
    <h1>My Team</h1>

             <div>
                <div>
                    <h2>${manager.getName()}</h2>
                    <h3>${manager.getRole()}</h3>
                </div>

                <!--card info section-->
                <div>
                    <ul>
                    <li>ID: ${manager.getId()}</li>
                    <!--link to email-->
                    <li>Email: ${manager.getEmail()}</li>
                    <li>School: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
    
        `, 
        (err) => err ? console.log(err) : console.log('Successfully added employee!'))

        addOrGenerate();
    });
};
//initialize beginning questions with node index.js
startQuestions();