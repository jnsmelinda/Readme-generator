// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  This repository is protected under the [${data.license}](${getLicenseLink(data.license)})

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

function getLicenseLink(license) {
    let link;
    switch(license) {
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
