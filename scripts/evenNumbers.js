// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

let list = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

function evenNum(numList) {
    let evenList = [];
    for(let num of numList) {
        if (num % 2 == 0){
            evenList.push(num);
        }
    }
    return evenList;
}
console.log(evenNum(list));