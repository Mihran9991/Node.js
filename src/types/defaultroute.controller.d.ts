import { IRouter } from "express";

export interface IDefaultController {
  path: string;
  router: IRouter;
}
