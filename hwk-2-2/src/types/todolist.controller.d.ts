import { IRouter } from "express";

export interface ITodoListController {
  path: string;
  router: IRouter;
}
