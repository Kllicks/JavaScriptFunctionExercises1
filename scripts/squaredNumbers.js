// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

let nums = [1, 2, 3, 4, 5];
let squares = [];
function square(n) {
    return n * n;
}
nums.forEach(function (num) {
    squares.push(square(num));
});
console.log(squares);