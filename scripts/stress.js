const got = require("./gotWithKeepAlive");
const sleep = async (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const run = async (qps) => {
  for (let i = 0; i < qps; i++) {
    // got("http://127.0.0.1:7002/okb");
    //
    got("http://127.0.0.1:7001/http");// 26.8% @20,     14%
    // got("http://127.0.0.1:7001/http-keepalive"); // 26.8% @20,     14%
    // got("http://127.0.0.1:7001/got"); // 25%
    // got("http://127.0.0.1:7001/axios"); //80% @20,      20%
    // got("http://127.0.0.1:7001/got-keepalive");//
    // got("http://127.0.0.1:7001/empty"); // 44% @20, 15.6%
    await sleep(1000 / qps);
  }
};

setInterval(() => {
  run(100);
}, 1 * 1000);
