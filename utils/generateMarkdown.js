// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `

  
   #${answers.projectTitle}
   ## Description
  ${answers.projectDescription}
 ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[contribution](#contribution)
  -[tests](#tests)
  -[license](#license)
  -[gitUsername](#gitUsername)
  -[email(#email)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${answers.installation}
\`\`\`
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Tests
To run tests, run the following command:
\`\`\`
${answers.tests}
\`\`\`
##License
${answers.license}
\`\`\`
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${answers.email}. 
`;
}

module.exports = generateMarkdown;
