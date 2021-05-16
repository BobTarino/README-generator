// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function licenseBadge(license){
  if (license !== "none"){
    return `
    ![badgeImage](https://img.shields.io/badge/license-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Licensed under ${license}`
  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${licenseBadge(data.license)}
    ## Description
    ${data.description}
    \`\`\`
    ## Table of contents
    *[Installation](#installation)
    *[Usage](#usage)
    ${licenseLink(data.license)}
    *[Contributing](#contributing)
    *[Test](#test)
    ## Installation
    To install dependancies, run the following commands:
    \`\`\`
    ${data.installation}
    \`\`\`
    ## Usage
    ${data.usage}
    ${renderLicenseSection(data.license)}
    ## Contributing
    ${data.contributing}
    ## Test
    \`\`\`
    ${data.test}
    \`\`\`
    ## Questions
    If you have questions about this repository, please contact me at ${data.email}
    You can see any of my other work at [${data.github}](https://github.com/${data.github}/)
    `;
}

module.exports = generateMarkdown;
