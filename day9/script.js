function validateOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve("Order Validated"), 1000);
    });
}

function processPayment(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve("Payment Processed"), 2000);
    });
}

function sendEmail(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve("Email Sent"), 1000);
    });
}

function placeOrder(orderId) {
    validateOrder(orderId)
        .then((message) => {
            console.log(message);
            return processPayment(orderId);
        })
        .then((message) => {
            console.log(message);
            return sendEmail(orderId);
        })
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(`Order Failed: ${error}`);
        });
}
placeOrder(1234);