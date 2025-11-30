import { hasOwnProperty } from './utils/hasOwnProperty';
import { dashToCamel, camelToDash } from './utils/notation';

export function CSSStyleDeclaration () {}

CSSStyleDeclaration.prototype = Object.create({});

CSSStyleDeclaration.prototype.getPropertyPriority = function (_propertyName) {
  return ''; // we don't store property priority
};

CSSStyleDeclaration.prototype.getPropertyValue = function (propertyName) {
  propertyName = dashToCamel(propertyName);
  return hasOwnProperty(this, propertyName) ? this[propertyName] : '';
};

CSSStyleDeclaration.prototype.setProperty = function (propertyName, value/*, priority */) {
  this[dashToCamel(propertyName)] = value;
};

CSSStyleDeclaration.prototype.removeProperty = function (propertyName) {
  const oldValue = this.getPropertyValue(propertyName);
  if (oldValue) {
    delete this[dashToCamel(propertyName)];
  }
  return oldValue;
};

CSSStyleDeclaration.prototype.valueOf = function () {
  return this;
};

CSSStyleDeclaration.prototype.toString = function () {
  let str = '';
  for (const p in this) {
    if (!hasOwnProperty(this, p)) {
      continue;
    }
    str += camelToDash(p) + ': ' + this[p] + '; ';
  }
  // 移除末尾的空格
  return str.trim();
};

CSSStyleDeclaration.prototype.setValue = function (style) {
  const list = style.split(';');
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const pair = item.split(':');
    if (pair.length === 2) {
      this[dashToCamel(pair[0].trim())] = pair[1].trim();
    }
  }
};

Object.defineProperty(CSSStyleDeclaration.prototype, 'cssText', {
  get: function () { return this.toString(); },
  set: function (text) { this.setValue(text); },
  enumerable: true
});
