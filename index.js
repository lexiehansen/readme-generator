// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    
    //TITLE
    {
      type: 'input',
      name: 'title',
      message: 'What is your project called? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    },

    //DESCRIPTION
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },

    //INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'Please include applicable installation instructions. (Optional)'
    },

    //USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for? (Optional)'
    },

    //LICENSING
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for this project: (Optional)',
        choices: [

        ]
    },

    //CONTRIBUTORS
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project? (Required)',
        validate: contributorsInput => {
          if (contributorsInput) {
            return true;
          } else {
            console.log('Please enter names of contributors!');
            return false;
          }
        }
    },

    //TESTING
    {
        type: 'input',
        name: 'testing',
        message: 'Please include applicable testing instructions. (Optional)'
    },

    //GITHUB USERNAME
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },

    //EMAIL
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
