const {Engineer} = require('../lib/Engineer');

test('Test the creation of a new Engineer', () => {
    const employee = new Engineer('Test Name', 9999, 'test@testmail.com', 'test-name');

    expect(employee.name).toBe('Test Name');
    expect(employee.id).toBe(9999);
    expect(employee.email).toBe('test@testmail.com');
    expect(employee.github).toBe('test-name')
})

test('Test engineer methods', () => {
    const employee = new Engineer('Test Name', 9999, 'test@testmail.com', 'test-name');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGitHub()).toBe(employee.github)
    expect(employee.getRole()).toBe('Engineer')
})