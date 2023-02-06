const Intern = require("../lib/Intern");

describe("Intern", () => {

  it('should have a school', () => {
    const intern = new Intern('Royale', 1, 'royale@email.com', 'UCONN' );
    expect(intern.getSchool).toEqual('UCONN'); 
  })
});
