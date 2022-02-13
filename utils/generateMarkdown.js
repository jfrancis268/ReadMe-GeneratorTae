// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let chosenLicense = `${data.license}`;
  let readLicense = '';
  
  if (chosenLicense === 'MIT License') {
    showLicense = 'MIT License';
    badgeLicense = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    readLicense = 'https://opensource.org/licenses/MIT';
  };
  if (chosenLicense === 'GNU AGPLv3') {
    showLicense = 'GNU AGPLv3 License' ;
    badgeLicense = '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
    readLicense = 'https://www.gnu.org/licenses/agpl-3.0';
  };
  if (chosenLicense === 'Mozilla Public License 2.0') {
    showLicense = 'Mozilla Public License 2.0';
    badgeLicense = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    readLicense = 'https://opensource.org/licenses/MPL-2.0';
  };
  if (chosenLicense === 'Apache License 2.0') {
    showLicense = 'Apache License 2.0';
    badgeLicense = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    readLicense = 'https://opensource.org/licenses/Apache-2.0';
  };
  if (chosenLicense === 'Boost Software License 1.0') {
    showLicense = 'Boost Software License 1.0';
    badgeLicense = '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    readLicense = 'https://www.boost.org/LICENSE_1_0.txt';
  };
  if (chosenLicense === 'The Unlicense') {
    showLicense = 'The Unlicense';
    badgeLicense = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    readLicense = 'http://unlicense.org/';
  };

return `
# ${data.title}

<br/>

## Project Description

${data.description}

<br/>


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)


## Deployment

${data.walkthrough}

<br/>

## Usage

${data.usage}

<br/>

## Credits

Third-party assets:
${data.credit}

<br/>

## License
${badgeLicense}

This application uses the ${showLicense}

For more information, please visit: ${readLicense}

<br/>

## Contributors

Project powered by the contributions of:
${data.contributors}

## Tests

${data.test}

## Questions
  If you have any questions, please reach out to a contributor via GitHub:
  [${data.question}](https://github.com/${data.userName})


`;
}

module.exports = generateMarkdown;
