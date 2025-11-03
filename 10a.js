const http = require('http');

const server = http.createServer((req, res) => {
 console.log("request received from browser......");
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("<h2>welcome to Node.js server</h2>\n");
 res.write("<p>this page is genarated using javascript</p>\n");
 res.write("<p><b>request URL:</b> " + req.url + "</p>\n");
 res.end("<h4>response send successfully!</h4>\n");
});
server.listen(3000, () => {
    console.log("server is running at http://localhost:3000");
});