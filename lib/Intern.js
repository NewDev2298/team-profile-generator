const Employee = require("./Employee");

// Instructors helped with creating code

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
        super(name, id, email);
    }

    getRole(){
        return 'Intern';
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
