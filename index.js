const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
function promptUser() {
    return inquirer.prompt( [
        {
            type: "input",
            name: "title",
            message: "Title:"
        },
        {
            type: "input",
            name: "description",
            message: "Description:"
        },
        {
            type: "input",
            name: "installation",
            message: "Installation:"
        },
        {
            type: "input",
            name: "usage",
            message: "Usage:"
        },
        {
            type: "list",
            name: "license",
            message: "License:",
            choices: ["MIT", "Apache License 2.0", "GNU GPLv3"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributing:"
        },
        {
            type: "input",
            name: "tests",
            message: "Tests:"
        },
        {
            type: "input",
            name: "github",
            message: "GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Email address:"
        }
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName,
        data,
        (err) => {
            if (err) throw err;
            console.log(`${fileName} has been saved!`);
        }
    );
}

// function to initialize program
async function init() {
    try {
        const answer = await promptUser();
        const md = generateMarkdown(answer);
        await writeToFile("test.md", md);
    }
    catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
