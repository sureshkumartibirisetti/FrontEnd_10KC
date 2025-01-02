// 4.	Callback on Condition
// Write a function checkEven that accepts a number and two
//  callback functions. If the number is even, call the first
//  callback with the number. If the number is odd, call the second
//  callback with the number.

//Named Function
function checkEven(num,even,odd){
    if(num%2==0){
        even(num);
    }else{
        odd(num);
    }
}
function even(n){
    console.log(`${n} is a Even number`);
}
function odd(n){
    console.log(`${n} is a odd number`);
}
checkEven(10,even,odd);

//Anonymous Function
function checkEven(num,even,odd){
    if(num%2==0){
        even(num);
    }else{
        odd(num);
    }
}
checkEven(10,function (n){
    console.log(`${n} is a Even number`);
    },
    function odd(n){
        console.log(`${n} is a odd number`);
    }
);

//Arrow Function
function checkEven(num,even,odd){
    if(num%2==0){
        even(num);
    }else{
        odd(num);
    }
}
checkEven(10,res=>console.log(`${res} is a Even number`),res=>console.log(`${res} is a odd number`));
