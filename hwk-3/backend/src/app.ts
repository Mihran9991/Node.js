import express from "express";

import Loaders from "./loaders/index";
import appConfig from "./configs/app";

/**
 * @description
 * App is a singleton class for
 * collecting all configurations and
 * running the express app.
 */
class App {
  private static instance: App;
  private app: express.Application = express();
  private port: number = appConfig.port;

  constructor() {
    new Loaders(this.app).initalizeAllLoadersSync();
  }

  /**
   * @description
   * Guarantees, that @class <App> can be
   * instantiated only once.
   */
  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }

    return App.instance;
  }

  /**
   * @description
   * Starts the express app
   */
  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }
}

App.getInstance().start();
