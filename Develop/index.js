const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {   type: "input", 
        name: "title",
        message: "What is the name of your project?"
    }, 
    {
        type: "list",
        name: "license",
        message: "Choose the license you used for your project:",
        choices: ["MIT", "apache", "eclipse", "PostgreSQL", "none"]
    },

    {
        type: "input",
        name: "description",
        message: "Write a description for your project."
    },

    {
        type: "input",
        name: "installation",
        message: "Please provide the  steps required for installation:",
        
    },

    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use:"
    },

    {
        type: "input",
        name: "contributing",
        message: "Please provide guidelines for other developers to contribute:"
        
    },

    {
        type: "input",
        name: "test",
        message: "Please provide tests for your application?",
       
    },

    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
   













];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
