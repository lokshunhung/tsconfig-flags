//
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classes are ES2015 feature
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.voice = function () {
        return "...";
    };
    Animal.prototype.speakLater = function () {
        var _this = this;
        // "const" declarations are ES2015 feature
        var timeout = 300;
        setTimeout(
        // Arrow functions are ES2015 feature
        function () { return console.log(_this.voice()); }, timeout);
    };
    return Animal;
}());
//
//
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.voice = function () {
        return "woof";
    };
    return Dog;
}(Animal));
//
//
new Dog().speakLater();
