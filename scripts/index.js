// You're given an array
// array = [[0, 1] , [2, 3] , [4, 5, [6, 7, [8, 9]]]]
// array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let array = [[0, 1] , [2, 3] , [4, 5, [6, 7, [8, 9]]], [10, 11, [12, [13, [14, 15]]]]];
let array2 = [];

function arrayValues(arr) {
    return arr.reduce(function (a, b) {
        return a.concat(Array.isArray(b) ? arrayValues(b) : b);
    }, []);
}

array2 = arrayValues(array);

console.log(array2);
