const http = require("http");

function testHomePage() {
    http.get("http://localhost:3007", (res) => {
        if (res.statusCode === 200) {
            console.log("✅ Home Page Passed");
        } else {
            console.log("❌ Home Page Failed");
        }
    });
}

function testRegistration() {
    const data = "name=test&email=test@test.com";

    const options = {
        hostname: "localhost",
        port: 3007,
        path: "/",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": data.length,
        },
    };

    const req = http.request(options, (res) => {
        if (res.statusCode === 200) {
            console.log("✅ Registration Passed");
        } else {
            console.log("❌ Registration Failed");
        }
    });

    req.write(data);
    req.end();
}

setTimeout(() => {
    testHomePage();
    testRegistration();
}, 5000);