// After including "ES5" lib, language globals like
// "String", "Number", "Array" are available

let s = String(10);

let n = Number("10");

let a = new Array(5);

// Note: Language features (methods, globals, etc) after "ES5" are not available

// @ts-expect-error -- new global "Symbol" added in ES2015
let m = Symbol();

// @ts-expect-error -- Array.prototype.fill method added in ES2015
a.fill(1);

// @ts-expect-error -- String.prototype.padStart method added in ES2017
let ps = s.padStart(4, "0");
