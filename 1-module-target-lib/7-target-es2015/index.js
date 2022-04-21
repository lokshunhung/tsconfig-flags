var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
class Foo {
    constructor() {
        // Targets older than "ES2022" will transform class fields
        // to be defined inside the constructor
        this.bar = ":)";
        this.speak = () => console.log(this.bar);
    }
}
// Targets older than "ES2017" will transform "async-await" syntax
// to use generators (i.e. "function* () {}"), similar to kotlin coroutines
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("hi");
        yield delay(100);
        const foo = new Foo();
        setTimeout(foo.speak, 300);
    });
}
main();
