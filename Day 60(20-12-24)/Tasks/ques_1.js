// 1.	Basic Callback Execution
// Write a function called processNumber that accepts a number 
// and a callback function. The processNumber function should double 
// the number and pass the result to the callback function.

//Named Function
function processNumber(a,callback){
    let result=a+a;
    callback(result);
}
function s(res){
    console.log(res);
}
processNumber(10,s);

//Anonymous Function
function processNumber(a,callback){
    let result=a+a;
    callback(result);
}
processNumber(10,function (x){
    console.log(x);
});

//Arrow Function
function processNumber(a,callback){
    let result=a+a;
    callback(result);
}
processNumber(10,res=>console.log(res));
