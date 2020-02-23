import express from "express";
import morgan from "morgan";

import { ILoader } from "../@types/loader";
import IndexRouter from "../api/routers/index";

export default class ExpressLoader implements ILoader {
  public load(app: express.Application) {
    app.use(morgan("combined"));
    app.use(express.json());
    app.use("/", new IndexRouter().getCollectedRoutes());
  }
}
