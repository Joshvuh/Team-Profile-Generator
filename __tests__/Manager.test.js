const {Manager} = require('../lib/Manager');

test('Test the creation of a new Manager', () => {
    const employee = new Manager('Test Name', 9999, 'test@testmail.com', '999-999-9999');

    expect(employee.name).toBe('Test Name');
    expect(employee.id).toBe(9999);
    expect(employee.email).toBe('test@testmail.com');
    expect(employee.phone).toBe('999-999-9999')
})

test('Test manager methods', () => {
    const employee = new Manager('Test Name', 9999, 'test@testmail.com', '999-999-9999');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getPhone()).toBe(employee.phone)
    expect(employee.getRole()).toBe('Manager')
})