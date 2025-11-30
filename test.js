const { Document, SVGElement } = require('./dist/nodom.js');
global.document = new Document();
global.SVGElement = SVGElement;
const { el, mount } = require('redom');

mount(document.body, el('h1', { id: 'x', style: 'cursor: pointer;' }, 'Hello world!'));
console.log(document.body.outerHTML);
