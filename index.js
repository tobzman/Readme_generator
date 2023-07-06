const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "Enter the title of your project:",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Enter a Description for your Project:",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions:",
    },
    {
      type: "input",
      name: "usage",
      message: "Enter usage information:",
    },
    {
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines:",
    },
    {
      type: "input",
      name: "tests",
      message: "Enter test instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "githubUsername",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address:",
    },
  ])
  .then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("README.md file generated successfully!");
      }
    });
  });
