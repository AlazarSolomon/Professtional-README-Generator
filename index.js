const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please input your description here explaining the what, why, and how of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use:',
      },
      {
        type: 'list',
        message: 'Which License would you like to pick for your application?',
        name: 'license',
        choices: ['Apache','Mozilla-Public', 'MIT', 'Common-Development-and Distribution', 'GNU-General-Public',]
      },
      {
        type: 'input',
        name: 'constribution',
        message: 'If you would like other developers to contribute to your application, you can include guidelines for how to do so here:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'write tests for your application. Then provide examples on how to run them here:'
      },
      {
        type: 'input',
        name: 'github',
        message: 'what is your github username?'
      },
      {
      type: 'input',
      name: 'email',
      message: 'what is your email address?',
      },
    ]);
  };
  const generateREADME = ({ title, description, installation, usage, constribution, license, test, github, email }) =>
   `# ${title}

   ## Badges
   
   [![${license}](https://img.shields.io/badge/license-MIT-blue)](https://shields.io)

   ## Description
   
   ${description}   

   ## Table of Contents
   
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)
   - [Badges](#badges)
   - [Contribute](#how-to-contribute)
   - [Tests](#tests)
   - [Questions](#questions)

   
   ## Installation
   
   ${installation}

   ## Usage
   
   ${usage}
   
   ## License
   
   This application is covered under ${license}.
      
   ## How to Contribute
   
   ${constribution}

   ## Tests
   
   ${test}

   ## Questions
   
   If you have any questions, I have listed my email and my github below.

   Github Link: https://github.com/${github}

   Email address: ${email}

   `
  
  // Bonus using writeFileSync as a promise
  const init = () => {
    promptUser()
      // Use writeFileSync method to use promises instead of a callback function
      .then((answers) => fs.writeFileSync('SampleREADME.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();
  