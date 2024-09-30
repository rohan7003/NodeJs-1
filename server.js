const http = require("http");
const port = 8081;
http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h5>we got our server here... checking nodemon</h5>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running On Port ${port}`);
})
