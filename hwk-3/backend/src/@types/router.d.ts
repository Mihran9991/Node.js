import { Request, Response, Router } from "express";

export type RouterObj = {
  path: string;
  action: Function;
  method: string;
};

export interface IRouter {
  getCollection(): Array<RouterObj>;
}

export interface IIndexRouter {
  getCollectedRoutes(): Router;
}
