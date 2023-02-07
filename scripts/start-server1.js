const data = require("./big.json");
const body = JSON.stringify(data);
let count = 0;

const sleep = async (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

require("http")
  .createServer(async function (req, res) {
    console.log("count", ++count);
    await sleep(10);
    res.end(body);
  })
  .listen(8000);
console.log("http://127.0.0.1:8000");
