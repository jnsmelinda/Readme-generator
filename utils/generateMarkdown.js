/* eslint-disable max-len */
// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

[![License](https://img.shields.io/static/v1?label=License&message=${data.license.split(" ").join("+")}&color=green)](${getLicenseLink(data.license)})
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contribution](#Contribution)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This repository is protected under the [${data.license}](${getLicenseLink(data.license)}) license.
<br>
© 2020 Melinda Ivanov

## Contribution
${data.contributing}

## Tests
${data.tests}

## Questions
You can contact me about issues and suggestions in [Email](mailto:${data.email}), you can also find me on [Github](https://github.com/${data.github}).
`;
}

function getLicenseLink(license) {
    let link;
    switch (license) {
    case "MIT":
        link = "https://choosealicense.com/licenses/mit/";
        break;
    case "Apache License 2.0":
        link = "https://choosealicense.com/licenses/apache-2.0/";
        break;
    case "GNU GPLv3":
        link = "https://choosealicense.com/licenses/gpl-3.0/";
        break;
    }
    return link;
}

module.exports = generateMarkdown;
