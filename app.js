//allows us to use the fs module (file system)
const fs = require("fs");

//module for creating page template
const generatePage = require("./src/page-template.js");

//takes command line inputs and cuts off after the 1 index to only capture user input
const profileDateArgs = process.argv.slice(2);

//assigns commandline input to variables [0][1]
const [name, github] = profileDateArgs;

//file name that will be created/output file, data that is being written, callback that will handle errors + success message
fs.writeFile("./index.html", generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log("Portfolio complete! Check out index.html to see the output!");
});