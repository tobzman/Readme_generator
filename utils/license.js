function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
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

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
