// 2.	Callback with Array Iteration
// Write a function called forEachElement that takes 
// an array and a callback function. The function should
//  iterate over the array and execute the callback function 
// for each element, passing the element as an argument.

//Named Function
function forEachElement(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}
function s(ele){
    console.log(ele);
}
forEachElement([1,2,3,4,5,6],s);

//Anonymous Function
function forEachElement(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}
forEachElement([1,2,3,4,5,6],function (ele){
    console.log(ele);
});

//Arrow function
function forEachElement(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}
forEachElement([1,2,3,4,5,6],ele=>console.log(ele));

