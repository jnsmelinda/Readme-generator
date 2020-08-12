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
  ${data.license}

  ## Contribution
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
