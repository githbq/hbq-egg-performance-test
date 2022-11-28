const HttpAgent = require("agentkeepalive");
const { HttpsAgent } = HttpAgent;
const got = require("got");

const liveOption = {
  keepAlive: true,
  maxSockets: 100,
};

const newAliveAgent = () => { 
  return {
    agent: {
      http: new HttpAgent(liveOption),
      https: new HttpsAgent(liveOption),
    },
  };
};
const aliveAgent = newAliveAgent();
module.exports = async (url) => {
  return got(url, aliveAgent);
};
