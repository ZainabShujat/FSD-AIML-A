// Simulate async login
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged in");
            resolve("UserToken123");
        }, 500);
    });
}

// Simulate async data fetch
function getData(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched");
            resolve([10, 20, 30]);
        }, 500);
    });
}


// Simulate async calculation
function calculateData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sum = data.reduce((a, b) => a + b, 0);
            console.log("Data calculated:", sum);
            resolve(sum);
        }, 500);
    });
}

// Simulate async SMS sending
function sendsms(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("SMS sent with result:", result);
            resolve(true);
        }, 500);
    });
}

// Simulate async logout
function logout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged out");
            resolve();
        }, 500);
    });
}

// Example usage with async/await
async function main() {
    const token = await login();
    const data = await getData(token);
    const result = await calculateData(data);
    await sendsms(result);
    await logout();
}

// Uncomment to run
// main();