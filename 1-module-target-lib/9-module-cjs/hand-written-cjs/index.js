"use strict";

const dep = require("./dep");

const text = `Bigger ${dep.foo} is ${dep.getBiggerFoo()}`;

console.log(text);
