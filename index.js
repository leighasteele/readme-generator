// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown.js');
const questions = inquirer.createQuestionModule();
// TODO: Create an array of questions for user input
qs([
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
    message: "Enter any installation commands.",
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
    message: "Enter commands to run tests.",
  },
  {
    name: "questions",
    message: "Enter contact information.",
  },
]);

// TODO: Create a function to write README file
function writeMD(fileName, answers) {
  if (fs.existsSync("output")) {
    fs.writeFileSync("output/product.md", template);
  } else {
    fs.mkdirSync("output");
    fs.writeFileSync("output/product.md", template);
  }};

  // TODO: Create a function to initialize app
  function initialize() {
    questions(qs).then((answers) => {
      console.log(answers);
      writeMD('template.md', answers);
    });
  }

  initialize();