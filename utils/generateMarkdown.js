// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
    
    return `![License](https://img.shields.io/badge/license-MIT-blue.svg)`;
  }
  return '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {f (license) {
    
    return'';
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license) {
    
  return '';
}}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${answers.projectTitle}
  ${answers.projectDescription}
  ${answers.installation}
  ${answers.usage}
  ${answers.contribution}
  ${answers.tests}
  ${answers.license}
  ${answers.gitUsername}
  ${answers.email}
`;
}

module.exports = generateMarkdown;
