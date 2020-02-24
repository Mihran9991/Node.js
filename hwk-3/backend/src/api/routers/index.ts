import { Router } from "express";
import fs from "fs";
import path from "path";

import { IIndexRouter, RouterObj } from "../../@types/router";

export default class IndexRouter implements IIndexRouter {
  private router: Router = Router();

  constructor() {
    this.initializeAllRoutersSync();
  }

  private initializeAllRoutersSync(): void {
    fs.readdirSync(__dirname)
      .filter(router => router.indexOf(".router") > -1)
      .forEach(ruterName => {
        const Router = require(path.resolve(__dirname, ruterName)).default;
        const routerCollection = new Router().getCollection();
        routerCollection.forEach(
          ({ path, action, method, middlewares = [] }: RouterObj) => {
            this.router[method](path, middlewares, action);
          }
        );
      });
  }

  public getCollectedRoutes(): Router {
    return this.router;
  }
}
