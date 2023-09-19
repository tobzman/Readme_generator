const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("./license");

function generateMarkdown(data) {
  return `# ${data.projectTitle}${renderLicenseBadge(data.license)}

## Description
${data.projectDescription}

## Table of Contents
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Testing](#Testing)
- ${renderLicenseLink(data.license)}
- [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Testing
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions about the repo, contact ${data.githubUsername} at ${
    data.email
  }.
`;
}

module.exports = generateMarkdown;
