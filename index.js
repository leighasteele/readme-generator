// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const questions = inquirer.createQuestionModule();
// TODO: Create an array of questions for user input
prompt([
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
  const template = `
    ${answers.title}
    ${answers.description}
    ${answers.installation}
    ${answers.usage}
    ${answers.license}
    ${answers.contriibution}
    ${answers.tests}
    ${answers.questions}
    `;
  if (fs.existsSync("output")) {
    fs.writeFileSync("output/product.md", template);
  } else {
    fs.mkdirSync("output");
    fs.writeFileSync("output/product.md", template);
  }
});
