// const os = require('os');
// console.log(os.platform(), os.homedir());
//Filesystem works
// files:
// create +
// read +
// update +
// delete +
// rename
// folder:
// create +
// list
// delete +
const fs = require('fs');
//Create (if file does not exist, WriteFile will create it)

// if (!(fs.existsSync("./myfiles/hello.txt"))) {
//     fs.writeFile("./myfiles/hello.txt", "hello summoner, how was you day?",() => {
       
//         console.log("Create file Success");
//     });
// }
// if (!fs.existsSync("./myfiles/hello.txt")) {
//     fs.writeFile("./myfiles/hello.txt", "hello student, how was you day?",() => {
       
//         console.log("Create file Success");
//     });
// }
// else{
//     console.log("file already exists, Deleting the file...");
//     fs.unlink("./myfiles/hello.txt",(err)=>{
//         if (err) {
//             console.log(err);
//         }
//         console.log("File Deleted");
//     });
// }
// // Read (if file exists, ReadFile will log it)

// if (fs.existsSync("./myfiles/hello.txt")) {
//     fs.readFile("./myfiles/hello.txt", "utf8", (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
//     });
// }
// else{
//     console.log("File does not exist");
// }

// update file/append file
// if (fs.existsSync("./myfiles/hello.txt")) {
//     fs.appendFile("./myfiles/hello.txt", " My day was awesome!", (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("Append Successful");
//         }
//     });
// }
// else{
//     console.log("File does not exist");
// }


// // make directory or folders

// if (!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Folder Created");
// })
// }
// else{
//     console.log("Folder already exists, deleting the folder instead...");
//     fs.rmdir("./assets", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder Deleted");
//     })
// }

