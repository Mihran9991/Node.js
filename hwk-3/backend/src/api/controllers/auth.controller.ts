import express from "express";

import BaseController from "./base.controller";
import AuthService from "../../services/auth.service";
import { IUser } from "../models/user.model";

export default class AuthController extends BaseController {
  private authService: any = new AuthService();

  constructor() {
    super();
  }

  public signIn = async (req: express.Request, res: express.Response) => {
    try {
      const userData: IUser = req.body;
      const queryResponse = await this.authService.signIn(userData);
      const { code, message } = queryResponse;

      if (code === 404) {
        return this.notFound(res, message);
      }

      if (code === 403) {
        return this.forbidden(res, message);
      }

      return this.ok(res, queryResponse);
    } catch (e) {
      this.fail(res, 400, e);
    }
  };
}

// {
// 	"email": "miroasd@com",
// 	"firstName": "Miro",
// 	"lastName": "Sahakyan",
// 	"role": 2,
// 	"birthday": "01/01/1998",
// 	"bio": "dsaads",
// 	"interests": ["sadasd", "dasd"],
// 	"password": "2132131"
// }
