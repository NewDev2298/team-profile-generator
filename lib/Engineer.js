const Employee = require("./Employee");

// Instructors helped with creating code

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        this.gitHub = gitHub;
        super(name, id, email);
    }

    getGithub(){
        return this.gitHub;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;
