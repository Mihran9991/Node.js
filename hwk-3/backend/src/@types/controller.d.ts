import express from "express";

export interface IBaseController {
  ok(res: express.Response): void;
  unauthorized(res: express.Response, msg: any): void;
  forbidden(res: express.Response, msg: any): void;
  notFound(res: express.Response, msg: any): void;
  clientError(res: express.Response, msg: any): void;
  serverError(res: express.Response, msg: any): void;
}
