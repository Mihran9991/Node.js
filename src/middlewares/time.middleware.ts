import { Request, Response, NextFunction } from "express";
import moment from "moment";

import { ITimeMiddleware } from "../types/time.middleware";

class TimeMiddleware implements ITimeMiddleware {
  public setTime(req: Request, res: Response, next: NextFunction): void {
    const { cookies } = req;
    const currentTimeCookieKey = "current-time";
    if (!Object.keys(cookies).includes(currentTimeCookieKey)) {
      res.cookie(currentTimeCookieKey, moment().format("YY/MM/DD HH:MM:SS"), {
        maxAge: 900000
      });
    }

    next();
  }
}

export default new TimeMiddleware();
