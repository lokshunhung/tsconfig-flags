import * as dep from "./dep.js";

const text = `Bigger ${dep.foo} is ${dep.getBiggerFoo()}`;
console.log(text);

//
//

// Module "ES2020" supports `import(...)` and `import.meta`

import("./async-dep.js").then(mod => {
    console.log(mod.asyncFoo);
});
console.log(import.meta.url);

//
//

// Module "ES2022" supports top-level await

// const mod = await import("./async-dep");
