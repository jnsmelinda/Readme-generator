const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
function promptUser() {
    return inquirer.prompt( [
        {
            type: "input",
            name: "title",
        },
        {
            type: "input",
            name: "description",
        },
        {
            type: "input",
            name: "tableOfContents",
        },
        {
            type: "input",
            name: "installation",
        },
        {
            type: "input",
            name: "usage",
        },
        {
            type: "input",
            name: "license",
        },
        {
            type: "input",
            name: "contributing",
        },
        {
            type: "input",
            name: "tests",
        },
        {
            type: "input",
            name: "questions",
        }
    ]);
}



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("succ2");
    })
}

// function to initialize program
async function init() {
    try {
        const answer = await promptUser();

        const md = generateMarkdown(answer);

        await writeToFile("test.md", md);

        console.log("succ");

    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
