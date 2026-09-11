function doTask(callback) {
    console.log("Task Started");

    callback();

    console.log("Task Ended");
}

function finished() {
    console.log("Task Finished Successfully");
}

doTask(finished);