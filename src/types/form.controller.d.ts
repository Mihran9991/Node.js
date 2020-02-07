import { IRouter } from "express";

export interface IFormController {
  path: string;
  router: IRouter;
}
