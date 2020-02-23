import { Response } from "express";

import { IBaseController } from "../../@types/controller";
import { roles } from "../../constants/user.constant";

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
  public clientError(res: Response, { message }: any) {
    res.status(400).send(message);
  }

  public serverError(res: Response, { message }: any) {
    res.status(500).send(message);
  }

  public isAdmin(role: number): boolean {
    return role === roles.Admin;
  }

  public isEmployee(role: number): boolean {
    return role === roles.Employee;
  }
}
