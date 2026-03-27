function myFunction() {
    console.log("starting a task...");
    
        //stimulate a long-running task
        let sum = 0;
        for (let i = 0; i < 1e8; i++) {
            sum += i;
        }
        console.log("task completed!");
        return sum;
    }
    console.log("before the function call");
    let result = myFunction();
    console.log("after the function call");
    console.log("Result:", result);
    alert("Checkout successful!");
