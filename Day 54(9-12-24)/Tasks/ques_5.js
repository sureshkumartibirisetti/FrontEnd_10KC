// 5.	Create two functions:
// –	beginTask that logs “Task Started”.
// –	finishTask that logs “Task Finished”.
// Inside the beginTask function, call the finishTask function.

function beginTask(){
    console.log("Task Started");
    finishTask();
}
function finishTask(){
    console.log("finishTask");
}
beginTask();