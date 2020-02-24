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
      const queryResponse = await this.userService.create(userData);
      return this.ok(res, queryResponse);
    } catch (e) {
      return this.fail(res, 400, e);
    }
  };

  public edit = async (req: express.Request, res: express.Response) => {
    try {
      const { body: userData } = req;
      // const { _id, role } = req.user;

      // if (this.isEmployee(role) && _id !== userData._id) {
      //   return this.forbidden(res);
      // }

      const queryResponse = await this.userService.edit(userData);
      return this.ok(res, queryResponse);
    } catch (e) {
      return this.fail(res, 400, e);
    }
  };

  public remove = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.body;
      const queryResponse = await this.userService.remove(id);
      return this.ok(res, queryResponse);
    } catch (e) {
      return this.fail(res, 400, e);
    }
  };

  public getEmployeeList = async (
    req: express.Request,
    res: express.Response
  ) => {
    try {
      const queryResponse = await this.userService.getEmployeeList();
      return this.ok(res, queryResponse);
    } catch (e) {
      return this.fail(res, 400, e);
    }
  };
}
