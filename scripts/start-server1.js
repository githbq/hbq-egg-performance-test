const data = require("./big.json"); 
const body = JSON.stringify(data)
let count = 0;
require("http")
  .createServer(function (req, res) {
    console.log("count", ++count);
    res.end(body);
  })
  .listen(8000);
console.log("http://127.0.0.1:8000");
