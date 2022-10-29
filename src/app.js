import Express from "express";
import router from "./router";
class App {
  constructor() {
    this.server = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}
  routes() {
    this.server.use(router);
  }
}

export default new App();
