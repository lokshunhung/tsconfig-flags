"use strict";

exports.foo = "bar";

exports.getBiggerFoo = function getBiggerFoo() {
    return exports.foo.toUpperCase();
};
