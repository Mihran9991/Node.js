import { Request, Response, NextFunction } from "express";

export interface ITimeMiddleware {
  setTime(req: Request, res: Response, next: NextFunction): void;
}
