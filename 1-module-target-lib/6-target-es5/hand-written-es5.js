function extendClass(Superclass, Subclass) {
    function SubclassPrototypeConstructor() {
        this.constructor = Superclass;
    }
    SubclassPrototypeConstructor.prototype = Superclass.prototype;
    Subclass.prototype = new SubclassPrototypeConstructor();

    // More readable way to do the same thing (but it's worse)
    // Subclass.prototype = { "__proto__": Superclass.prototype, "constructor": Superclass };
}

//
//

function Animal() {}
Animal.prototype.voice = function () {
    return "...";
};
Animal.prototype.speakLater = function () {
    var that = this;
    var timeout = 300;
    setTimeout(
        // The timeout callback has a different "this" context (the global object),
        // so we have to capture the "this" context of the animal instance outside
        // using `var that = this`
        function () { console.log(that.voice()); },
        // Notice that you can't use trailing commas here :(
        timeout
    );
};

//
//

function Dog() {
    Animal.call(this, arguments);
}
extendClass(Animal, Dog);
Dog.prototype.voice = function () {
    return "woof";
};

//
//

new Dog().speakLater();
