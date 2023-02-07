const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { type } = require('os');

// Instructor assisted with prompt code
const prompt = inquirer.createPromptModule();
const teamMem = [];

const managerQuestions = [
    {
        message: 'Please add name of manager.',
        name: 'name',
        default: 'Terrance'
    },
    {
        message:'What is the manager\'s id number?' ,
        name: 'id',
        default: 4842
    },
    {
        message: 'What is the manager\'s email address?',
        name: 'email',
        default: 'terrance@student.com'
    },
    {
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
        default: 352
    },
];


const engineerQuestions = [
    {
        message: 'Please add name of engineer.',
        name: 'name',
        default: 'Quisha'
    },
    {
        message:'What is the engineer\'s id number?' ,
        name: 'id',
        default: 1021
    },
    {
        message: 'What is the engineer\'s email address?',
        name: 'email',
        default: 'la.mcf@student.com'
    },
    {
        message: 'What is the engineer\'s GitHub name?',
        name: 'gitHub',
        default: 'lalli'
    },
];
    

const internQuestions = [
    {
        message: 'Please add name of intern.',
        name: 'name',
        default: 'Mel'
    },
    {
        message:'What is the intern\'s id number?' ,
        name: 'id',
        default: 072
    },
    {
        message: 'What is the intern\'s email address?',
        name: 'email',
        default: 'steelers@herewego.com'
    },
    {
        message: 'What is the intern\'s school?',
        name: 'school',
        default: 'FCHS'
    },
];


prompt (managerQuestions).then(({name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamMem.push(manager);
})
    .then(() => {
        return prompt({
            message: 'Would you like to add another employee?',
            type: 'confirm',
            name: 'addEmployee',
        })
})
    .then(({addEmployee}) => {
        if (addEmployee) {
            console.log('CONTINUE');
        } else {
            console.log('WRITE FILE');
        }
})
    .then(() => {
        return prompt({
            type: 'rawlist',
            message: 'What type of employee would you like to add?',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
             ],
            name: 'type'
        })
}) 

    .then(({type}) => {
        switch(type) {
            case 'Manager': {

            }
            case 'Engineer': {

            }
            case 'Intern': {
                
            }

        }
        
});
