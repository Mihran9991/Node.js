import { IRouter } from "express";

export interface IMyRouteController {
  path: string;
  router: IRouter;
}
