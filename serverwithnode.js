const http = require("http");
const fs= require("fs");
const server = http.createServer((req, res)=>{
    console.log("request made");
    var path = "./views/";
    switch (req.url) {
        case '/':
            res.statuscode = 200;
            path += 'index.html';
            break;
        case '/about':
            res.statuscode = 200;

            path += 'about.html';
            break;
       
        case '/about-us':
            res.statuscode = 301;
            res.setHeader("location", "/about");
            break;
       
        case '/contact':
            res.statuscode = 200;

            path += 'contact.html';
            break;
    
        default:
            res.statusCode = 404;
            path += '404.html';
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err) throw err;
        res.setHeader("status", 200);
        res.setHeader("Content-Type", "text/html");
        // res.write(data);
        res.end(data);
    })

    // res.setHeader("content-type","text/plain");
    // res.write("Hi node");
    // res.end();
})

server.listen(3000, ()=>{
    console.log("Listening to port 3000.....");
})
