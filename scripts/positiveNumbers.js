// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

let list = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

function positiveNum(numList) {
    let positiveList = [];
    for(let num of numList) {
        if (num > 0){
            positiveList.push(num);
        }
    }
    return positiveList;
}
console.log(positiveNum(list));