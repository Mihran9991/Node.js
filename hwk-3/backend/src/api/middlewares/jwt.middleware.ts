import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import config from "../../configs/app";

class JWTMiddleware {
  public verify(req: Request, res: Response, next: NextFunction) {
    const token: string | null = String(req.headers["authorization"]).split(
      " "
    )[1];

    try {
      const { data } = jwt.verify(token, config.auth.jwt_secret);
      req.user = data;
    } catch (e) {
      return res.status(401).send(e.message || e);
    }

    next();
  }
}

export default new JWTMiddleware();
