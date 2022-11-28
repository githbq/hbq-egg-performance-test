"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/http", controller.home.http);
  router.get("/http-keepalive", controller.home.keepAliveHttp);
  router.get("/got", controller.home.got);
  router.get("/got-keepalive", controller.home.keepAliveGot);
  router.get("/axios", controller.home.axios);
  router.get("/empty", controller.home.empty);
};
