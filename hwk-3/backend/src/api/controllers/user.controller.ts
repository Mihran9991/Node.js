import express from "express";

import BaseController from "./base.controller";

export default class userController extends BaseController {
  constructor() {
    super();
  }

  public example(req: express.Request, res: express.Response) {
    try {
      // const { ... } = req;
      // ...
      this.ok(res);
    } catch (e) {
      this.clientError(res, e);
    }
  }
}
