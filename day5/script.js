function greet(){
    console.log("Hello");
}
greet()



function showMessage(){
    console.log("This is a message");
}
showMessage();



function logInfo(){
    console.log("Logging Information");
}
logInfo();


function startGame(){
    console.log("Game started");
    endGame();
}
function endGame(){
    console.log("Game Over");
}
startGame();



function beginTask(){
    console.log("Task Started");
    finishTask();
}
function finishTask(){
    console.log("Task Finished");
}
beginTask();