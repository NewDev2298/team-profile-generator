const Engineer = require("../lib/Engineer");

describe("Engineer", () => {

  it('should have a GitHub', () => {
    const engineer = new Engineer('Royale', 1, 'royale@email.com', 'kiDev' );
    expect(engineer.getGitHub()).toEqual('kiDev'); 
  })
  it('should have a role', () => {
    const engineer = new Engineer('Royale', 1, 'royale@email.com', 'kiDev');
    expect(engineer.getRole()).toEqual('Engineer');
  })
});
