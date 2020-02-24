import { Response } from "express";

import { IBaseController } from "../../@types/controller";
import { ROLES } from "../../constants/user.constant";

export default class BaseController implements IBaseController {
  public ok(res: Response, data?: any): void {
    res.status(200).send({
      data: data || "Ok"
    });
  }

  public unauthorized(res: Response, { message }: any) {
    res.status(401).send(message);
  }

  public forbidden(
    res: Response,
    message: any = "Employee can't perform ADMIN specific actions"
  ) {
    res.status(403).send(message);
  }

  public notFound(res: Response, { message }: any) {
    res.status(404).send(message);
  }
  public fail(res: Response, code: number = 400, { message }: any) {
    res.status(code).send(message);
  }

  public isAdmin(role: number): boolean {
    return role === ROLES.Admin;
  }

  public isEmployee(role: number): boolean {
    return role === ROLES.Employee;
  }
}
