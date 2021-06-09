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

//function to complete the file
generateTeam = () => {
    fs.appendFile('./dist/team.html',
        `
        </body>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
          integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
          crossorigin="anonymous"
        ></script>
      </html>`,
        (err) => err ? console.log(err) : console.log('Team has been built!'))
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
                <div class="col-sm-6" style="width: 18rem">
                 <div class="card">
                    <div class="card-body">
                        <h5 class="card-title text-center">${engineer.getName()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">${engineer.getRole()}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Github Username:<a href="https://github.com/${engineer.getGit()}">${engineer.getGit()}</a></li>
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
                <div class="col-sm-6" style="width: 18rem">
                    <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title text-center">${intern.getName()}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item text-center">${intern.getRole()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a></li>
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                    </div>
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
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
      crossorigin="anonymous"
    ></script>
    <title>My Team</title>
  </head>
  <body>
    <h1>My Team</h1>

    <div class="row">

      <div class="col-sm-6">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title text-center">${manager.getName()}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-center"><dt>${manager.getRole()}</dt></li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a></li>
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
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