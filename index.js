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
// Instantiate the appropriate shape class, get its SVG content based on user input
function generateSVG(text, textColor, shape, shapeColor) {
    let shapeInstance;
    let shapeSVG = '';
  
    switch (shape) {
      case 'circle':
        shapeInstance = new Circle(shapeColor);
        shapeSVG = shapeInstance.getSVGContent();
        break;
      case 'triangle':
        shapeInstance = new Triangle(shapeColor);
        shapeSVG = shapeInstance.getSVGContent();
        break;
      case 'square':
        shapeInstance = new Square(shapeColor);
        shapeSVG = shapeInstance.getSVGContent();
        break;
      default:
        throw new Error('Invalid shape selected.');
    }
  // Construct the SVG content by combining shape-specific SVG and text elements
    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${text}</text>
      </svg>
    `;
  
    return svgContent;
  }
  // Save the generated SVG content to a file 
  function saveSVGToFile(fileName, svgContent) {
    fs.writeFile(fileName, svgContent, (err) => {
      if (err) {
        console.error('Error saving the SVG file:', err);
      } else {
        console.log('Generated ' + fileName);
      }
    });
  }
  // Initiate the user input process, generate SVG content, and save to a file
    function init() {
      inquirer
        .prompt(questions)
        .then((answers) => {
          const { text, textColor, shape, shapeColor } = answers;
          const svgContent = generateSVG(text, textColor, shape, shapeColor);
          saveSVGToFile('logo.svg', svgContent);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    
    init();