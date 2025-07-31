// 3rd example


const fs = require("fs");

setImmediate(() => console.log("setImmediate"), 0);

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);       //Promise value is passed in console.log


// Note: it's a callback hence it works as same as the libuv event loop works
fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");