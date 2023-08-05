//Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

//  Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter three characters for your logo:',
    validate: (input) => {
      if (input.length > 3) {
        return 'Please enter a maximum of three characters only.';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal number):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for your logo:',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal number):',
  },
]