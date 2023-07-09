// const os = require('os');
// console.log(os.platform(), os.homedir());

const fs = require('fs');
//Create (if file does not exist, WriteFile will create it)

if (!(fs.existsSync("./myfiles/hello.txt"))) {
    fs.writeFile("./myfiles/hello.txt", "hello summoner, how was you day?",() => {
       
        console.log("Create file Success");
    });
}

//Read (if file does not exist, ReadFile will log it)

if (fs.existsSync("./myfiles/hello.txt")) {
    fs.readFile("./myfiles/hello.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
}
else{
    console.log("File does not exist");
}


if (fs.existsSync("./myfiles/hello.txt")) {
    fs.appendFile("./myfiles/hello.txt", " My day was awesome!", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Append Successful");
        }
    });
}
else{
    console.log("File does not exist");
}