const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    { //new employee, if no then end questions
        type: 'confirm',
        message: 'New Employee?',
        name: 'new',
    },
    {
        type: 'input',
        message: 'Employee Name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Employee email',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Type of Employee',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
]

const managerQuestion = [
    //additional question for manager
    {
        type: 'input',
        message: 'Manager office number',
        name: 'officeNumber'
    },
]

const engineerQuestion = [
    //additional questions for engineer
    {
        type: 'input',
        message: 'Engineer github',
        name: 'github'
    },
]

const internQuestion = [
    //additional questions for intern
    {
        type: 'input',
        message: 'Intern School',
        name: 'school'
    },
]

const askLastQuestions = () => {
    inquirer.prompt(lastQuestion).then((answer)=>{
        switch (answer.add) {
            case 'yes':
            inquirer.prompt(questions).then(console.log('all questions answered!'));
            break;

            case 'no':
            console.log('all questions answered!');
            break;
        }
    })
}
const lastQuestion = [
    //add another employee?
    {
        type: 'confirm',
        message: 'Add another employee?',
        name: 'add',
    }
]

inquirer.prompt(questions).then((answer) => {
    //switch statement for other question prompts based on type of job role
    switch (answer.role) {
        case 'Manager':
            inquirer.prompt(managerQuestion).then(askLastQuestions);
            break;
        case 'Engineer':
            inquirer.prompt(engineerQuestion).then(askLastQuestions);
            break;
        case 'Intern':
            inquirer.prompt(internQuestion).then(askLastQuestions);
            break;
    }
    })

//start with employee questions
//if yes to new employee, continue
//if no, end application

//if manager selected, start manager questions
//if engineer selected, start engineer questions
//if intern selected, start intern questions

//always end with anotherQuestion
//if yes to add another employee, start app over
//if no, end application