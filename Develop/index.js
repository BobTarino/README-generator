const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer
    .prompt([

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
            message: "Please provide the steps required for installation:",
            default: "![screenshotImage](./assets/images/readme-gen_screenshot.png)"
            
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
    
    ])

   

};

// TODO: Create a function to write README file
// creating path for __dirname (created directory) and fileName
function writeToFile(fileName, data){
    return fs.writeFile(path.join(__dirname, fileName), data, err => {
        console.log(err);
    })
}

function init() {
    questions()
        .then(response => {
            writeToFile("README.md", generateMarkdown(response));
            console.log("Success!")
        });
};

init();