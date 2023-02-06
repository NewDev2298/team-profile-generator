const managerQuestions = [
  {
    message: 'What is the manager\'s name?',
    name: 'name',
    default: 'Tammy',
  },
  {
    message: 'What is the manager\'s id?',
    name: 'id',
    default: '123',
  },
  {
    message: 'What is the manager\'s email?',
    name: 'email',
    default: 'tammy@email.com',
  },
  {
    message: 'What is the manager\'s office number?',
    name: 'officeNumber',
    default: '123',
  },
];

const engineerQuestions = [
  {
    message: 'What is the engineer\'s name?',
    name: 'name',
    default: 'Gary',
  },
  {
    message: 'What is the engineer\'s id?',
    name: 'id',
    default: '12',
  },
  {
    message: 'What is the engineer\'s email?',
    name: 'email',
    default: 'gary@email.com',
  },
  {
    message: 'What is the engineer\'s GitHub name?',
    name: 'gitHub',
    default: 'gMoney',
  },
];

const internQuestions = [
  {
    message: 'What is the intern\'s name?',
    name: 'name',
    default: 'Shawn',
  },
  {
    message: 'What is the intern\'s id?',
    name: 'id',
    default: '321',
  },
  {
    message: 'What is the intern\'s email?',
    name: 'email',
    default: 'shawn@email.com',
  },
  {
    message: 'What is the intern\'s school?',
    name: 'school',
    default: 'UNCC',
  },
];

module.exports = { engineerQuestions, internQuestions, managerQuestions }
