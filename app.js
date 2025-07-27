// require("./xyz.js");        //one module into another


// const obj=require("./sum.js")      //can wrtie any variable

//destructing   -old syntax
// const {x,calculateSum}=require("./calculate/sum");


//new syntax
// import { calculateSum ,x} from "./sum.js";


// const util=require("node:util");

const {calculateSum,calculateMultiply}=require("./calculate")
const data=require("./data.json")

var name = "Namaste NodeJs";

var a = 10;
var b=20;

console.log(name);
calculateSum(a,b);
calculateMultiply(a,b)
console.log("JSON DATA");
console.log(data);



// console.log(x);

// console.log(global);
// console.log("-------------------------------");
// console.log(this);
// console.log("-------------------------------");
// console.log(globalThis);
// console.log("-------------------------------");
// console.log(globalThis===global);


//We can use the same variables using modules