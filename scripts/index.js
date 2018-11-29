// You're given an array
// array = [[0, 1] , [2, 3] , [4, 5, [6, 7, [8, 9]]]]
// array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let array1 = [[0, 1] , [2, 3] , [4, 5, [6, 7, [8, 9]]]];

// let array2 = [...new Set(array1)];

// let array3 = [];
// let array2 = Array.from(new Set(array1));

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

console.log(flatten(array1));
