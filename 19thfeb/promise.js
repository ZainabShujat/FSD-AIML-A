//create anewPormise
const myPromise = new Promise((resolve, reject) => {
    //simulate an asynchronous operation( eg.api call, timer, etc.)
    setTimeout(() => {
        const success = Math.random() > 0.5; //change to false to simulate an error
        if (success) {
            resolve("Operation successful!"); //resolve the promise with a success message
        } else {
            reject(new Error("Operation failed!")); //reject the promise with an error message
        }
    }, 2000); //simulate a 2-second delay
});

//using the promise
myPromise
    .then(result => {
        console.log(result); //log the success message
    })
    .catch(error => {
        console.error(error.message); //log the error message
    });
