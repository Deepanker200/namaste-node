//Modules protects their variables and functions from leaking

console.log("Sum Module");
var x = "Hello world";

//older way- but uses in industry
function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);
}

// console.log(module.exports);

module.exports = { x, calculateSum };

//newer way
// export function calculateSum(a, b) {
//     const sum = a + b;

//     console.log(sum);

// }


//For commonjs
//old way
// module.exports = {
//     x:x,
//     calculateSum: calculateSum
// };