// Given this function:

// function call3Times(fun) {
//   fun();
//   fun();
//   fun();
// }
// Use the call3Times function to print "Hello, world!" 3 times


function call3Times(fun) {
    function fun(){
        console.log("Hello, world!"); 
    }
    fun();
    fun();
    fun();
}
call3Times();