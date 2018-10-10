// Write a strMultiply function which takes two arguments:

// str - the string to multiply
// times - number of times to multiply
// Example:

// > strMultiply('abc', 5)
// 'abcabcabcabcabc'
// You may not use the native repeat method that strings provide. But you can use the range function defined below.

// You may use the following range function as is:

// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
//-------------------------------------------------
// function strMultiply (str, times) {
//     function range(min, max) {
//         let arr = [];
//         for (let i = min; i < max; i++) {
//             arr.push(str);
//         }
//         return arr;
//     }
//     range(0, times);
// }
// console.log(strMultiply('abc', 5));

function strMultiply(str, times) {
    let arr = ``;

    for (let i = 0; i < times; i++) {
        // arr.push(str);
        arr += str;
    }
    console.log(arr);
}
strMultiply(`abc`, 5);
