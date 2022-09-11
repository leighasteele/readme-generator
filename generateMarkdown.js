// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.title}

  ## Description
  
  ${answers.description}

  ## Table of Contents

  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contribution Guidelines](#Contribution Guidelines)
  [Test Instructions](#Test Instructions)
  [Questions or Comments?](#Questions or Comments?)

  ## Installation
  
 command ${answers.installation}

  ## Usage
  
  ${answers.usage}

  ## License
  
  ${answers.license}

  ## Contribution Guidelines
  
  ${answers.contribution}

  ## Test Instructions
  
  command ${answers.tests}

  ## Questions or Comments?
  
  contact ${answers.questions}
`;
}

module.exports = generateMarkdown;
