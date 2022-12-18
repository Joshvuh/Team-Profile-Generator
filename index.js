const inquirer = require('inquirer');
const writeFile = require('./src/fs-template');
const template = require('./src/html-template')

const {Engineer, engineerPrompts} = require('./lib/Engineer');
const {Intern, internPrompts} = require('./lib/Intern');
const {Manager, managerPrompts} = require('./lib/Manager');

const currentEmployees = [];

const newEngineer = () => {
    inquirer.prompt(engineerPrompts)
    .then((data) => {
        results = new Engineer(data.name, data.id, data.email, data.github);
        currentEmployees.push(results);
        return newEmployee();
    })
};

const newIntern = () => {
    inquirer.prompt(internPrompts)
    .then((data) => {
        results = new Intern(data.name, data.id, data.email, data.school);
        currentEmployees.push(results);
        return newEmployee();
    })
};

const newManager = () => {
    inquirer.prompt(managerPrompts)
    .then((data) => {
        results = new Manager(data.name, data.id, data.email, data.phone);
        currentEmployees.push(results);
        return newEmployee();
    })
};

const newEmployee = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'Please select a role for the new employee',
            choices: [
                {name: 'Engineer', value: 'Engineer'},
                {name: 'Intern', value: 'Intern'},
                {name: 'Manager', value: 'Manager'},
                {name: 'Finished', value: 'Finished'},
            ]}
    ])
    .then(data => {
        if (data.role === 'Engineer') {
            newEngineer();
        };
        if (data.role === 'Intern') {
            newIntern();
        };
        if (data.role === 'Manager') {
            newManager();
        };
        if (data.role === 'Finished') {
            let html = template(currentEmployees)
            writeFile(html)
        }
    })
}

const init = () => {
    newEmployee()
}

init();