const Employee = require('./Employee');

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

module.exports = {Manager, managerPrompts};