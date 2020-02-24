import { IRouter } from "express";

export interface IResultsController {
  path: string;
  router: IRouter;
}
