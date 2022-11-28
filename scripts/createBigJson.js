const fs = require("fs-extra");
const path = require("path");
// require('./cpuUsage')

const x = { a: 1, b: 2 };

 
for (let i = 0; i < 200; i++) {
  x[`aaa${i}`] = {};
  for (let j = 0; j < 200; j++) {
    x[`aaa${i}`][`bbb$${j}`] = new Array(i)
      .join(",")
      .split(",")
      .map((item, index) => `${index}`)
      .join("-");
  }
} 

fs.writeFile(path.resolve(__dirname, "big.json"), JSON.stringify(x));
 

 