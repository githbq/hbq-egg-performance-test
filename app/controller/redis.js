const Controller = require("egg").Controller;
const { getClient } = require("../../libs/redis");

class RedisController extends Controller {
  async test() {
    const { ctx } = this;
    const client = await getClient();
    await client.set("xxx", "ssss");
    ctx.body = await client.get("xxx", "ssss");
  }
}

module.exports = RedisController;
