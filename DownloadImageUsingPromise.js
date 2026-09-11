function downloadImage() {

    return new Promise(function(resolve, reject) {

        console.log("Downloading Image...");

        let success = true;

        if (success) {
            resolve("photo.jpg");
        }
        else {
            reject("Download Failed");
        }

    });

}

downloadImage()
    .then(function(image) {
        console.log("Displaying:", image);
    })
    .catch(function(error) {
        console.log(error);
    });