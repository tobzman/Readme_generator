function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return "";
}

module.exports = { renderLicenseBadge, renderLicenseSection };
