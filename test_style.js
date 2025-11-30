const { Document, SVGElement } = require('./dist/nodom.js'); 
global.document = new Document(); 
global.SVGElement = SVGElement; 
const { el, mount } = require('redom'); 
 
// 创建一个带有style属性的元素
const h1 = el('h1', { id: 'x', style: 'cursor: pointer;' }, 'Hello world!'); 
 
// 检查style属性是否被正确设置
console.log('h1.style:', h1.style); 
console.log('h1.style.cssText:', h1.style.cssText); 
 
// 将元素挂载到文档中
mount(document.body, h1); 
 
// 检查outerHTML是否包含style属性
console.log('document.body.outerHTML:', document.body.outerHTML);