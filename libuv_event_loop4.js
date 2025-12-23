//4th example

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);       //Promise value is passed in console.log


fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    // setTimeout(() => console.log("setTimeOut of nextTick"),0);     //It wil print after setImmediate because it sends it to other Callback queue which will run in next turn

    console.log("nextTick");
})
console.log("Last line of the file.");