//allows us to use the fs module (file system)
const fs = require("fs");
const inquirer = require("inquirer");

//module for creating page template
const generatePage = require("./src/page-template.js");

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));

// //utilize page-template.js
// const pageHTML = generatePage(name, github);

// //file name that will be created/output file, data that is being written, callback that will handle errors + success message
// fs.writeFile("./index.html", pageHTML, err => {
//     if (err) throw err;

//     console.log("Portfolio complete! Check out index.html to see the output!");
// });