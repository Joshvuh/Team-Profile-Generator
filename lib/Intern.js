const Employee = require('./Employee');

// Prompts to be used when creating a new employee under the Intern role
const internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: `What is the intern's name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the intern's ID?`
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the intern's email?`
    },
    {
        type: 'input',
        name: 'school',
        message: `Where is the intern attending school?`
    },
]

// Intern class created as an extension of the employee class, takes input of name, id, email, and school.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
};

// Exporting the class and questions to be used in index.js
module.exports = {Intern, internPrompts};