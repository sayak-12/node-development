//global object in node.js
// console.log(global);

// setTimeout(()=>{
//     console.log("Timeout reached");
//     clearInterval(interval);
// },3000)

// var interval = setInterval(()=>{
//     console.log("looping this text...");
// },300)

//directory name and file path
// console.log(__dirname);
// console.log(__filename);

const peopledata = require('./database');
console.log(peopledata);
console.log(peopledata[4]);
