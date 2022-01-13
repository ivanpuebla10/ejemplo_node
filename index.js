let http = require("http");
const math = require('./math')


http.createServer((req, res) =>{
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Aprendiendo en The Bridge!!!!!!!!!!");
  })
  .listen(5000);

console.log(math.sum(2,3))


