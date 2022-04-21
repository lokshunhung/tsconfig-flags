// After including "ES2015" lib, language features older than
// "ES2015" are also included (eg those from "ES5")

let s = String(10);

let n = Number("10");

let a = new Array(5);

// Now available: new global "Symbol" added in ES2015
let m = Symbol();

// Now available: Array.prototype.fill method added in ES2015
a.fill(1);

// Note: Language features (methods, globals, etc) after "ES2015" are not available

// @ts-expect-error -- String.prototype.padStart method added in ES2017
let ps = s.padStart(4, "0");
