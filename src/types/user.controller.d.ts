import { IRouter } from "express";

export interface IUserController {
  path: string;
  router: IRouter;
}
