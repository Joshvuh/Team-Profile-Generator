const Employee = require('./Employee');

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

module.exports = {Intern, internPrompts};