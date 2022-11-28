const http = require("http");

const agent = new http.Agent({
  keepAlive: true,
  maxSockets: 100,
});

module.exports.httpGetWithKeepAlive = async (url) => {
  return new Promise((resolve) => {
    const options = {
      agent,
      method: "GET",
      hostname: "127.0.0.1",
      port: 8000,
    };
    const request = http.request(options, (res) => {
      let content = "";
      let result;
      res.on("data", (chunk) => {
        content += chunk;
      });
      res.on("end", () => {
        // result = JSON.parse(content);
        resolve({});
      });
    });
    request.end();
  });
};

module.exports.httpGet = async (url) => {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let content = "";
      let result;
      res.on("data", (chunk) => {
        content += chunk;
      });
      res.on("end", () => {
        // result = JSON.parse(content);
        resolve({});
      });
    });
  });
};
