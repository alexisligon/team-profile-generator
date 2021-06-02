const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    { //new employee, if no then end questions
        type: 'list',
        message: 'New Employee?',
        name: 'new',
        choices: ['Yes', 'No']
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
        name: 'type',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    //additional questions for manager
    {
        type: 'input',
        message: 'Manager office number',
        name: 'officeNumber'
    },
    //additional questions for engineer
    {
        type: 'input',
        message: 'Engineer github',
        name: 'github'
    },
    //additional questions for intern
    {
        type: 'input',
        message: 'Intern School',
        name: 'school'
    }
]

inquirer.prompt(questions).then(() => {
    console.log('all questions answered!')
})