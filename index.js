const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Instructor assisted with prompt code
const prompt = inquirer.createPromptModule();
const teamMem = [];

const managerQuestions = [
    {
        message: 'Please add name of manager.',
        name: 'name',
    },
    {
        message:'What is the manager\'s id number?' ,
        name: 'id',
    },
    {
        message: 'What is the manager\'s email address?',
        name: 'email',
    },
    {
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
    },
    ];

prompt (managerQuestions).then(({name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamMem.push(manager);
});

