const Manager = require("../lib/Manager");

describe("Manager", () => {

  it('should have an officeNumber', () => {
    const manager = new Manager('Royale', 1, 'royale@email.com', 112 );
    expect(manager.getOfficeNumber()).toEqual(112); 
  })
  it('should have a role', () => {
    const manager = new Manager('Royale', 1, 'royale@email.com', 112);
    expect(manager.getRole()).toEqual('Manager');
  })
});
