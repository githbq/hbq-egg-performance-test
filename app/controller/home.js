const got = require("got");
const gotWithKeepAlive = require("../../scripts/gotWithKeepAlive");
const axios = require("axios");
const Controller = require("egg").Controller;
require("../../scripts/cpuUsage");
const { httpGetWithKeepAlive, httpGet } = require("../../scripts/http");

const timeDic = {};
let count = 0;
class HomeController extends Controller {
  async empty() {
    this.ctx.body = "";
  }
  async keepAliveGot() {
    const { ctx } = this;
    count++;
    const countValue = count;

    timeDic["index" + countValue] = Date.now();
    const response = await gotWithKeepAlive("http://127.0.0.1:8000");
    const response2 = await gotWithKeepAlive("http://127.0.0.1:8000/abc");
    
  
    ctx.body = {};
  }
  async got() {
    const { ctx } = this;

    const map = new Map();
    const response = await got("http://127.0.0.1:8000");
    // console.log("1.response.isFromCache", response.isFromCache);

    const response2 = await got("http://127.0.0.1:8000");
    // console.log("2.response.isFromCache", response2.isFromCache);
    ctx.body = {};
  }

  async http() {
    const { ctx } = this;
    const result1 = await httpGet("http://127.0.0.1:8000");
    const result2 = await httpGet("http://127.0.0.1:8000/abc");
    ctx.body = {};
  }

  async keepAliveHttp() {
    const { ctx } = this;
    const result1 = await httpGetWithKeepAlive("http://127.0.0.1:8000");
    const result2 = await httpGetWithKeepAlive("http://127.0.0.1:8000/abc");
    ctx.body = {};
  }

  async axios() {
    const { ctx } = this;

    await axios.get("http://127.0.0.1:8000");
    await axios.get("http://127.0.0.1:8000/abc");
    ctx.body = {};
  }
}

module.exports = HomeController;
