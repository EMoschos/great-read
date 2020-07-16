const inquirer = require("inquirer");
const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");
const genMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "What is the Title of the Project?",
    "Description of the Project?",
    "What are the user steps to install the App (installation instructions)?",
    "How do i use the App?",
    "What are the guidelines for people to contribute to this project?",
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
                "Apache License 2.0 (Apache-2.0)",
                "BSD 3-Clause",
                "BSD 2-Clause",
                "GNU General Public License (GPL)",
                "Lesser General Public License (LGPL)",
                "MIT license",
                "Mozilla Public License 2.0 (MPL-2.0)",
                "Common Development and Distribution License (CDDL-1.0)",
                "Eclipse Public License version 2.0 (EPL-2.0)",
                "N/A",
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
}

// function to initialize program
async function init() {
    const data = await promptUser();
    const readmeCreate = genMarkdown.generateMarkdown(data);
    console.log(readmeCreate);
    console.log(JSON.stringify(data, null, '\t'));
};

// function call to initialize program
init();
