// 4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?


function isEMpty(arr){
    if(arr.length==0){
        console.log("Empty array");
    }else{
        console.log("not empty array");
    }
}
var arr=[1,2,3,4];
isEMpty(arr);