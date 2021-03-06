// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


// Array of questions for user input
function promptUser(){
    return inquirer.prompt([
    
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
        message: 'Please include applicable usage instructions. (Optional)'
    },

    //LICENSING
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for this project: (Optional)',
        choices: [
			'GNU',
			'Mozilla',
			'Apache',
			'MIT',
			'Other',
			'None',
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
        name: 'test',
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
    
    ]);
} 

// Function to write README file/initialize app
async function init() {
    const userInput = await promptUser();
    const generateContent = generateMarkdown(userInput);
    await writeFileAsync('./generatedREADME.md', generateContent);
        console.log('Congrats! Your README is available as generatedREADME.md!');
}

// Function call to initialize app
init();
