// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. 

// You are allowed to use a loop in the implementation of callNTimes.

function callNTimes (times, fun) {
    for (i=0; i < times; i++){
        function fun(){
            console.log(`loop ` + (i+1));
        }
        fun();
    }
}

callNTimes(5);

