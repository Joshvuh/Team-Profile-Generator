const Employee = require('./Employee');

const engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: `What is the employee's name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the employee's ID?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the employee's email?`
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the employee's GitHub username?`
    },
]

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = {Engineer, engineerPrompts};