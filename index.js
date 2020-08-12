const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
function promptUser() {
    return inquirer.prompt( [
        {
            type: "input",
            name: "title"
        },
        {
            type: "input",
            name: "description"
        },
        {
            type: "input",
            name: "installation"
        },
        {
            type: "input",
            name: "usage"
        },
        {
            type: "list",
            name: "license",
            message: "license?",
            choices: ["MIT", "Apache License 2.0", "GNU GPLv3"]
        },
        {
            type: "input",
            name: "contributing"
        },
        {
            type: "input",
            name: "tests"
        },
        {
            type: "input",
            name: "questions"
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
