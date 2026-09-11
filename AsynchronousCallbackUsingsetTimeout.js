function downloadImage(callback) {
    console.log("Download Started");

    setTimeout(function () {
        console.log("Download Completed");
        callback();
    }, 3000);
}

function displayImage() {
    console.log("Displaying JPG");
}

downloadImage(displayImage);

console.log("Doing Other Work...");