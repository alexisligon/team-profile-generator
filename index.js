const inquirer = require('inquirer');
const fs = require('fs');

const employeeQuestions = [
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

const anotherQuestion = [
    //add another employee?
    {
        type: 'list',
        message: 'Add another employee?',
        name: 'add',
        choices: ['Yes', 'No']
    }
]

inquirer.prompt(questions).then(() => {
    console.log('all questions answered!')
})