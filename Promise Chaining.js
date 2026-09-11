function downloadImage() {

    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("photo.jpg");
        }, 2000);

    });

}

function resizeImage(image) {
    console.log("Resizing:", image);
    return image;
}

function saveImage(image) {
    console.log("Saving:", image);
    return image;
}

function displayImage(image) {
    console.log("Displaying:", image);
}

downloadImage()
    .then(resizeImage)
    .then(saveImage)
    .then(displayImage)
    .catch(function(error) {
        console.log(error);
    });