// /*
// create a promise that resolves after sometime
// @param n number of miliseconds before the promise resolves
// */
// function timeout(n: number) {
//     return new Promise((res) => setTimeout(res, n));
//   }
//   /*
//   add 3 numbers
//   @param a first number
//   @param b second number
//   */
//   export async function addNumber(a: number, b: number) {
//     await timeout(500);
//     return a + b;
//   }
//   (async () => {
//     console.log(await addNumber(3, 5));
//   })();
//   let xyz: number
// //   xyz = "new string"
//   xyz = 89
//   console.log(xyz)
const newFunc = (z) => {
    switch (true) {
        case 3 === z:
            z = "new string";
            break;
        case 5 === z:
            z = 45;
            break;
        default:
            z = true;
            return z;
    }
};
console.log(newFunc(5));
//# sourceMappingURL=index.js.map