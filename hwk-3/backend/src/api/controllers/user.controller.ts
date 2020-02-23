import express from "express";

import BaseController from "./base.controller";
import UserService from "../../services/user.service";

export default class UserController extends BaseController {
  private userService: any = new UserService();

  constructor() {
    super();
  }

  public example = (req: express.Request, res: express.Response) => {
    try {
      this.ok(res);
    } catch (e) {
      this.clientError(res, e);
    }
  };
}
