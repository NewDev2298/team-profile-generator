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


const engineerQuestions = [
    {
        message: 'Please add name of engineer.',
        name: 'name',
    },
    {
        message:'What is the engineer\'s id number?' ,
        name: 'id',
    },
    {
        message: 'What is the engineer\'s email address?',
        name: 'email',
    },
    {
        message: 'What is the engineer\'s GitHub name?',
        name: 'gitHub',
    },
    ];
    

const internQuestions = [
    {
        message: 'Please add name of intern.',
        name: 'name',
    },
    {
        message:'What is the intern\'s id number?' ,
        name: 'id',
    },
    {
        message: 'What is the intern\'s email address?',
        name: 'email',
    },
    {
        message: 'What is the intern\'s school?',
        name: 'school',
    },
    ];


prompt (managerQuestions).then(({name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamMem.push(manager);
});

