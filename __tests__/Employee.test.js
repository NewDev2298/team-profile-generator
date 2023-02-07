const Employee = require("../lib/Employee");

describe("Employee", () => {

  it('should have a name', () => {
    const employee = new Employee('Royale', 1, 'royale@email.com');
    expect(employee.name).toEqual('Royale');
  })
  it('should have an id', () => {
    const employee = new Employee('Royale', 1, 'royale@email.com');
    expect(employee.id).toEqual(1);
  })
  it('should have an email', () => {
    const employee = new Employee('Royale', 1, 'royale@email.com');
    expect(employee.email).toEqual('royale@email.com');
  })
  it('should have a role', () => {
    const employee = new Employee('Royale', 1, 'royale@email.com');
    expect(employee.getRole()).toEqual('Employee');
  })
});
