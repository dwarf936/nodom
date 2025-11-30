const { Document, SVGElement } = require('./dist/nodom.js');
global.document = new Document();
global.SVGElement = SVGElement;

// Create a new element
const h1 = document.createElement('h1');

// Set the style.cssText property directly
h1.style.cssText = 'cursor: pointer;';

// Set other attributes
h1.id = 'x';
h1.textContent = 'Hello world!';

// Append the element to the body
document.body.appendChild(h1);

// Print the outerHTML
console.log(document.body.outerHTML);