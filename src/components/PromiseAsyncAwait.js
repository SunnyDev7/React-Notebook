// setInterval, setTimeOut, API handling these are some examples of Asynchronous Tasks
// Handle Asynchronous tasks means to make them behave as synchronous
// to handle them we have Promise and Async Await



//Promise

//Promise is the way handling asynchronous code in a synchronous way

let completed = true;

let learnJS = new Promise((resolve, reject) => {
    if (completed) {
        resolve("I have completed learning JS.");
    } else {
        reject("I haven't completed learning JS yet.");
    }
})
.then(() => console.log("Good Job"))
.catch(() => console.log("Pls Complete Learning JS"))
.finally(() => console.log("Study everyday"))




//Async Await
//this is the new way of defining promise
//Async makes a function promise based
//and Await lets a task know it needs to be done synchronously

let completed = true;

let learnJS = async () => {
    try{
        if(await completed)
        console.log("Good Job")
    }
    catch(err){
        console.log("Pls complete learning JS", err)
    }
    finally{
        console.log("Study Everyday")
    }
}