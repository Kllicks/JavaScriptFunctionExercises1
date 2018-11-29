// You're given an array
// array = [[0, 1] , [2, 3] , [4, 5, [6, 7, [8, 9]]]]
// array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let array1 = [[0, 1] , [2, 3] , [4, 5, [6, 7, [8, 9]]]];
let array2 = [];

function uniqueValues(arr) {
    return arr.reduce(function (a, b) {
        return a.concat(Array.isArray(b) ? uniqueValues(b) : b);
    }, []);
}

array2 = uniqueValues(array1);

console.log(array2);
