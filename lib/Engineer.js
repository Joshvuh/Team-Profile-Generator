const Employee = require('./Employee');

// Prompts to be used when creating a new employee under the Engineer role
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

// Engineer class created as an extension of the employee class, takes input of name, id, email, and github username.
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

// Exporting the class and questions to be used in index.js
module.exports = {Engineer, engineerPrompts};