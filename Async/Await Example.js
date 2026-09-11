function getData() {

    return new Promise(function(resolve) {

        setTimeout(function() {
            resolve("Data Received");
        }, 3000);

    });

}

async function showData() {

    let result = await getData();

    console.log(result);
}

showData();