const Employee = require('../lib/Employee');

test('Test the creation of a new Employee', () => {
    const employee = new Employee('Test Name', 9999, 'test@testmail.com');

    expect(employee.name).toBe('Test Name');
    expect(employee.id).toBe(9999);
    expect(employee.email).toBe('test@testmail.com');
})

test('Test employee methods', () => {
    const employee = new Employee('Test Name', 9999, 'test@testmail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})