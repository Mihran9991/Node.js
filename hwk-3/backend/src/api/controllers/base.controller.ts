import { Response } from "express";

import { IBaseController } from "../../@types/controller";

export default class BaseController implements IBaseController {
  public ok(res: Response): void {
    res.status(200).send("Ok");
  }

  public unauthorized(res: Response, { message }: any) {
    res.status(401).send(message);
  }

  public forbidden(res: Response, { message }: any) {
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
}
