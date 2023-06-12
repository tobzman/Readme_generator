const inquirer = require("inquirer");
inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle"
      message: "Enter the title of your project:",
      
    },
    {
      type: "input",
      name: "ProjectDescription"
      message: "Enter a Description for your Project:",
      
    },
    {
      type: "input",
      name: "installation"
      message: "Enter installation instructions:",
     
    },
    {
      type: "input",
      name: "usage"
      message: "Enter usage information:",
     
    },
     {
      type: "input",
      name: "contribution"
      message: "Enter contribution guidelines:",
     
    },
     {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },

  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );
function generateREADME(answers) {
  return `#${answers.projectTitle}
  ${answers.projectDescription}
  ${answers.installation}
  ${answers.usage}
  ${answers.contribution}
  ${answers.tests}
  ${answers.license}
  ${answers.githubUsername}
  ${answers.email}
`;

}
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFile('ReadMe.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
});