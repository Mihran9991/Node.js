import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import uuid from "uuid";

import { IApp } from "./types/app";

class App implements IApp {
  public app: express.Application;
  public port: number;

  constructor(controllers: Array<any>, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeGlobalVariables();
    this.initializeSSREngine();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(cookieParser());
    this.app.use(cors());
  }

  private initializeControllers(controllers: Array<any>) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }

  private initializeGlobalVariables() {
    global.todos = {
      [uuid()]: {
        title: "lorep ipsum"
      }
    };
  }

  private initializeSSREngine() {
    this.app.set("view engine", "ejs");
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
