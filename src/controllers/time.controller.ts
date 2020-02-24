import { Router, Request, Response, IRouter } from "express";
import moment from "moment";

import { ITimeController } from "../types/time.controller";

class TimeController implements ITimeController {
  public path: string = "/time";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getCurrentTime);
  }

  private getCurrentTime(req: Request, res: Response) {
    const currentTime = moment().format("HH:MM:SS");
    return res.status(200).send(currentTime);
  }
}

export default new TimeController();
