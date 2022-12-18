const {Intern} = require('../lib/Intern');

test('Test the creation of a new Intern', () => {
    const employee = new Intern('Test Name', 9999, 'test@testmail.com', 'UNCC');

    expect(employee.name).toBe('Test Name');
    expect(employee.id).toBe(9999);
    expect(employee.email).toBe('test@testmail.com');
    expect(employee.school).toBe('UNCC')
})

test('Test intern methods', () => {
    const employee = new Intern('Test Name', 9999, 'test@testmail.com', 'UNCC');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getID()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school)
    expect(employee.getRole()).toBe('Intern')
})