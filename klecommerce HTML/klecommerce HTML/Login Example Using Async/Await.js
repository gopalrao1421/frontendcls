function login(username, password) {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (username === "admin" &&
                password === "admin") {

                resolve("Login Success");
            }
            else {

                reject("Invalid Credentials");

            }

        }, 2000);

    });

}

async function checkLogin() {

    try {

        let result = await login("admin", "admin");

        console.log(result);

    }
    catch(error) {

        console.log(error);

    }

}

checkLogin();