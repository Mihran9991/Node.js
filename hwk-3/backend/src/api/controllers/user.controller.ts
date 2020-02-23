import express from "express";

import BaseController from "./base.controller";
import UserService from "../../services/user.service";

export default class UserController extends BaseController {
  private userService: any = new UserService();

  constructor() {
    super();
  }

  public create = async (req: express.Request, res: express.Response) => {
    try {
      const { body: userData } = req;
      const { role } = userData;

      if (this.isEmployee(role)) {
        return this.forbidden(res);
      }

      const queryResponse = await this.userService.create(userData);
      return this.ok(res, queryResponse);
    } catch (e) {
      this.clientError(res, e);
    }
  };

  public edit = async (req: express.Request, res: express.Response) => {
    try {
      const { body: userData } = req;
      const queryResponse = await this.userService.update(userData);
      return this.ok(res, queryResponse);
    } catch (e) {
      this.clientError(res, e);
    }
  };

  public remove = async (req: express.Request, res: express.Response) => {
    try {
      const { id, role } = req.body;

      if (this.isEmployee(role)) {
        return this.forbidden(res);
      }

      const queryResponse = await this.userService.remove(id);
      return this.ok(res, queryResponse);
    } catch (e) {
      this.clientError(res, e);
    }
  };

  public getEmployeeList = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const { role } = req.body;

      if (this.isEmployee(role)) {
        return this.forbidden(res);
      }

      const queryResponse = await this.userService.getEmployeeList();
      return this.ok(res, queryResponse);
    } catch (e) {
      this.clientError(res, e);
    }
  };
}
