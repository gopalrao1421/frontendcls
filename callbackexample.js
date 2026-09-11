function processPayment(callback) {
    console.log("Payment Processing...");

    callback();
}

function paymentSuccess() {
    console.log("Payment Successful ✅");
}

processPayment(paymentSuccess);