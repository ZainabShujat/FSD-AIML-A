function dosomething() {
    throw new Error("Something went wrong");
}

function init() {
    try {
        dosomething();
    }
    catch (error) {
        console.error("Error caught in init:", error.message);
    }
}