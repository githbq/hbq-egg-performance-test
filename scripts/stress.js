const got = require("./gotWithKeepAlive");

const sleep = async (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
const timeDic = {};
const run = async (qps, pageIndex) => {
  for (let i = 1; i <= qps; i++) {
    // got("http://127.0.0.1:7002/okb");
    //
    // got("http://127.0.0.1:7001/http");// 26.8% @20,     14%
    // got("http://127.0.0.1:7001/http-keepalive"); // 26.8% @20,     14%
    // got("http://127.0.0.1:7001/got"); // 25%
    // got("http://127.0.0.1:7001/axios"); //80% @20,      20%
    (async (index) => {
      timeDic[`---` + (pageIndex * qps + index)] = Date.now();
      await got("http://127.0.0.1:7001/http"); //
      // await got('http://127.0.0.1:8000')
      console.log(
        `---` + (pageIndex * qps + index),
        Date.now() - timeDic[`---` + (pageIndex * qps + index)],
        "ms"
      );
    })(i);
    // got("http://127.0.0.1:7001/empty"); // 44% @20, 15.6%
    await sleep(1000 / qps);
  }
};
let seconds = 60;
const timer = setInterval(() => {
  if (seconds === 0) {
    clearInterval(timer);
    return 
  }
  run(10, 5 - seconds);
  seconds--;
}, 1 * 1000);
