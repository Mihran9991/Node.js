import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import { ILoader } from "../@types/loader";

export default class ExpressLoader implements ILoader {
  public load(app: express.Application) {
    app.use(morgan("combined"));
    app.use(bodyParser.json());
  }
}
