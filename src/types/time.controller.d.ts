import { IRouter } from "express";

export interface ITimeController {
  path: string;
  router: IRouter;
}
