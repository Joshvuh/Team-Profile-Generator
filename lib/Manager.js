const Employee = require('./Employee');

// Prompts to be used when creating a new employee under the Manager role
const managerPrompts = [
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
        name: 'phone',
        message: `What is the employee's office phone number?`
    },
]

// Manager class created as an extension of the employee class, takes input of name, id, email, and phone number.
class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }

    getRole() {
        return 'Manager';
    }

    getPhone() {
        return this.phone;
    }
}

// Exporting the class and questions to be used in index.js
module.exports = {Manager, managerPrompts};