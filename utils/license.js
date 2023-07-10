// Function to render the license badge based on the provided license value
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Function to render the license section content based on the provided license value
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

module.exports = { renderLicenseBadge, renderLicenseSection };
