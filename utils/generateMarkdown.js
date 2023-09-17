function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\n${license}`;
  }
  return "";
}
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contributing)
- [Testing](#Testing)
- ${renderLicenseLink(data.license)}
- [Questions](#Questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Testing
${data.test}

${renderLicenseSection(data.license)}

## Questions
  If you have any questions about the repo, contact ${answers.gitUsername} at ${
    answers.email
  }.
  `;
}

module.exports = generateMarkdown;
