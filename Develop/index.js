const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "What is the Title of the Project?",
    "Description of the Project?",
    "What are the user steps to install the App (installation instructions)?",
    "How do I use the App?",
    "What are the guidelines for people to contribute to this project?",
    "What License would you like to use for this project",
    "What are the steps to test the application?",
    "What is your GitHub UserName?",
    "What is your Email Address?"
];

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },
        {
            type: "input",
            name: "installation",
            message: questions[2]
        },
        {
            type: "input",
            name: "usage",
            message: questions[3]
        },
        {
            type: "input",
            name: "contributing",
            message: questions[4]
        },
        {
            type: "list",
            name: "license",
            message: questions[5],
            choices: [
                "Apache-2.0",
                "BSD-3-Clause",
                "GPL-2.0",
                "LGPL-3.0",
                "MIT",
                "ISC",
                new inquirer.Separator()
            ]
        },
        {
            type: "input",
            name: "test",
            message: questions[6]
        },
        {
            type: "input",
            name: "github",
            message: questions[7]
        },
        {
            type: "input",
            name: "email",
            message: questions[8]
        }
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        };
        console.log("Created README.md");
    })
}

// function to initialize program
async function init() {
    const data = await promptUser();
    const readmeCreate = genMarkdown.generateMarkdown(data);
    await writeToFile("README.md", readmeCreate);
    console.log(readmeCreate);
    console.log(JSON.stringify(data, null, '\t'));
};

// function call to initialize program
init();
