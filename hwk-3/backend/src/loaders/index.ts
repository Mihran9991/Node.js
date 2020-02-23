import fs from "fs";
import express from "express";
import path from "path";

import { IIndexLoader } from "../@types/loader";

export default class IndexLoader implements IIndexLoader {
  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }

  /**
   * @description
   * read all loaders and
   * initialize with @property app
   */
  public initalizeAllLoadersSync(): void {
    fs.readdirSync(__dirname)
      .filter(l => l.indexOf(".loader") > -1)
      .forEach(async loaderName => {
        const Loader = require(path.resolve(__dirname, loaderName)).default;
        await new Loader().load(this.app);
      });
  }
}
