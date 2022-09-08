// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const questions = inquirer.createQuestionModule();
// TODO: Create an array of questions for user input
questions([
  {
    name: "title",
    message: "Enter a title for your README.",
  },
  {
    name: "description",
    message: "Enter a description for your README.",
  },
  {
    name: "installation",
    message: "Enter an installation process.",
  },
  {
    name: "usage",
    message: "Enter usage instructions.",
  },
  {
    name: "license",
    message: "Enter a license.",
  },
  {
    name: "contribution",
    message: "Enter contribution guidelines.",
  },
  {
    name: "tests",
    message: "Enter any tests.",
  },
  {
    name: "questions",
    message: "Enter contact information.",
  },
]).then((answers) => {
  console.log(answers);
  const template = `# ${answers.title}

  ## Description
  
  ${answers.description}

  ## Installation
  
  ${answers.installation}

  ## Usage
  
  ${answers.usage}

  ## License
  
  ${answers.license}

  ## Contribution Guidelines
  
  ${answers.contribution}

  ## Test Instructions
  
  ${answers.tests}

  ## Questions or Comments?
  
  ${answers.questions}

    `;
  if (fs.existsSync("output")) {
    fs.writeFileSync("output/product.md", template);
  } else {
    fs.mkdirSync("output");
    fs.writeFileSync("output/product.md", template);
  }
});
