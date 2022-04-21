// Tip: target a higher version if you don't need to support IE

//
//

// Classes are ES2015 feature
class Animal {
    voice() {
        return "...";
    }

    speakLater() {
        // "const" declarations are ES2015 feature
        const timeout = 300;

        setTimeout(
            // Arrow functions are ES2015 feature
            () => console.log(this.voice()),
            timeout,
        );
    }
}

//
//

class Dog extends Animal {
    override voice() {
        return "woof";
    }
}

//
//

new Dog().speakLater();
