const test = require('tape');
const { Document } = require('../dist/nodom.js');

test('style cssText should not be undefined', (t) => {
  const document = new Document();
  const element = document.createElement('div');

  // Set some style properties
  element.style.color = 'red';
  element.style.backgroundColor = 'blue';

  // Check if cssText is defined and contains the style properties
  t.ok(element.style.cssText, 'cssText should be defined');
  t.true(element.style.cssText.includes('color: red'), 'cssText should contain color property');
  t.true(element.style.cssText.includes('background-color: blue'), 'cssText should contain backgroundColor property');

  // Check if setting cssText works
  element.style.cssText = 'font-size: 16px; font-weight: bold;';
  t.true(element.style.cssText.includes('font-size: 16px'), 'cssText should contain font-size property after setting');
  t.true(element.style.cssText.includes('font-weight: bold'), 'cssText should contain font-weight property after setting');

  t.end();
});
