//Importing shapes.js file
const { Circle, Triangle, Square } = require("./shapes")

//Testing for a red circle to be displayed
describe('Circle', () => {
    test('Circle should return correct SVG content', () => {
      const circle = new Circle('red');
      expect(circle.getSVGContent()).toEqual('<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="red" />');
    });
  });

//Testing for a blue triangle  to be displayed
describe('Triangle', () => {
    test('Triangle should return correct SVG content', () => {
      const triangle = new Triangle('blue');
      expect(triangle.getSVGContent()).toEqual('<polygon points="150,0 -100,400 400,400" height="100%" width="100%" fill="blue" />');
    });
  }); 

//Testing for a green square to be displayed
describe('Square', () => {  
    test('Square should return correct SVG content', () => {
      const square = new Square('green');
      expect(square.getSVGContent()).toEqual('<rect x="35" y="25" width="250" height="250" fill="green" />');
    });
  });

//Testing for a circle with '#269e46' color to be displayed
  describe('Circle', () => {
    test('Circle should return correct SVG content', () => {
      const circle = new Circle('#269e46');
      expect(circle.getSVGContent()).toEqual('<circle cx="150" cy="100" r="100" height="100%" width="100%" fill="#269e46" />');
    });
  });

//Testing for a triangle with '#7979e0' color to be displayed
describe('Triangle', () => {
    test('Triangle should return correct SVG content', () => {
      const triangle = new Triangle('#7979e0');
      expect(triangle.getSVGContent()).toEqual('<polygon points="150,0 -100,400 400,400" height="100%" width="100%" fill="#7979e0" />');
    });
  }); 

//Testing for a '#b526ac' color square to be displayed
describe('Square', () => {  
    test('Square should return correct SVG content', () => {
      const square = new Square('#b526ac');
      expect(square.getSVGContent()).toEqual('<rect x="35" y="25" width="250" height="250" fill="#b526ac" />');
    });
  });