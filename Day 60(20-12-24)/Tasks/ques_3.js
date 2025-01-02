// 3.	Simple Delayed Callback
// Write a function sayHello that accepts a name and a
//  callback function. Use setTimeout to wait for 1 second and
//  then call the callback function, passing the
//  message "Hello, [name]!" (replace [name] with the provided name).

//Named function
function sayHello(name,callback){
    var msg=`Hello, ${name}!`;
    setTimeout(abc,3000);
    function abc(){
        callback(msg);
    }
}
function s(x){
    console.log(x);
}
sayHello("suresh",s);

//Anonymous Function
function sayHello(name,callback){
    let msg=`Hello, ${name}!`;
    setTimeout(abc,3000);
    function abc(){
        callback(msg);
    }
}
sayHello("suresh",function(msg){
    console.log(msg);
});

//Arrow Function
function sayHello(name,callback){
    let msg=`Hello, ${name}!`;
    setTimeout(abc,3000);
    function abc(){
        callback(msg);
    }
}
sayHello("suresh",msg=>console.log(msg));
