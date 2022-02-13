// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const Choices = require('inquirer/lib/objects/choices');
const util = require('util')

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project.'
    },
    {
        type: 'input',
        name: 'walkthrough',
        message: 'Please enter a walkthrough of the instillation process and/or deployment links included'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please give us a walkthrough on how to use this application'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the licenses inlcuded in this project to add it',
        choices: ['MIT License', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please enter Contributer information'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Add any third-party assests used as well as any technology used'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Add tests for application and how to use it'
    },
    {
        type: 'input',
        name: 'question',
        message: 'Provide name of your GitHub so users can reach out with their questions.',
    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Ayy you did it! It generated dude!!!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function(data){
        writeToFile("README.md", generateMarkdown(data))

    })
}

// Function call to initialize app
init();
