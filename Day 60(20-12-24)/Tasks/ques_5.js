// 5.	Sequential Callbacks
// Write a function performTasks that accepts a number and two 
// callback functions. First, add 5 to the number using the first 
// callback, and then multiply the result by 2 using the second 
// callback. Log the final result to the console.

// Named Function
function performTasks(num,add,mul){
    console.log(mul(add(num)));
}
function add(n){
    return n+5;
}
function mul(n){
    return n*2;
}
performTasks(10,add,mul);

//Anonymous Function
function performTasks(num,add,mul){
    console.log(mul(add(num)));
}
performTasks(10,
    function (n){
        return n+5;
    },
    function (n){
        return n*2;
    }
);

//Arrow Functions
function performTasks(num,add,mul){
    console.log(mul(add(num)));
}
performTasks(10,res=>res+5,res=>res*2);
