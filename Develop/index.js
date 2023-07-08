// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readme = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'project_title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Can you give a brief description of your project?',
  },
  {
    type: 'input',
    name: 'installation_instruction',
    message: 'What is the installation instruction?',
  },
  {
    type: 'input',
    name: 'useage_info',
    message: 'Any usage information?',
  },
  {
    type: 'input',
    name: 'contribu_guide',
    message: 'What is the contribution_guideline?',
  },
  {
    type: 'input',
    name: 'test_instruc',
    message: 'Any test instrcution?',
  },
  {
    type: 'list',
    message: 'Which licesne do you want to choose?',
    name: 'license',
    choices: ['MIT license', 'GPL'],
  },
  {
    type: 'input',
    name: 'GIT_name',
    message: 'What is your GITHUB usernmae?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log("Information was saved successfully!!")
            console.log(data);
            //const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        
            // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            //   err ? console.log(err) : console.log('Success!')
            // );
          })
}

// Function call to initialize app
init();
