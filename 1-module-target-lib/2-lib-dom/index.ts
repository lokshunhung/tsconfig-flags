// After including "DOM" lib, browser globals like
// "document", "window", "console" are available

let div = document.createElement("div");
div.classList.add("container");
div.style.width = "100%";
div.style.height = "100%";

window.addEventListener("click", function onClick(ev) {
    if (ev.target === div) {
        console.log("clicked: " + ev);
    }
});

document.body.appendChild(div);

// Note: Node.js globals are not included
// (installed from npm "@types/node")
// @ts-expect-error
process.env.NODE_ENV;

// Note: Language globals are not included
// (included using libs like "ES2015")
// @ts-expect-error
let one = String(1);
