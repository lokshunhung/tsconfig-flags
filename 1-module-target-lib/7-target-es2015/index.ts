function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

class Foo {
    // Targets older than "ES2022" will transform class fields
    // to be defined inside the constructor
    bar = ":)";
    speak = () => console.log(this.bar);
}

// Targets older than "ES2017" will transform "async-await" syntax
// to use generators (i.e. "function* () {}"), similar to kotlin coroutines
async function main() {
    console.log("hi");
    await delay(100);

    const foo = new Foo();
    setTimeout(foo.speak, 300);
}

main();
