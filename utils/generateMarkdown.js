// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  questions: ${data.questions}

`;
}

module.exports = generateMarkdown;
