// 5.	Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”

let x=(a,b)=>(a.length>b.length)?a:(a.length<b.length)?b:"equal Length";
console.log(x("suresh","kumar"));