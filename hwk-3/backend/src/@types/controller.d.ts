import express from "express";

export interface IBaseController {
  ok(res: express.Response, data?: any): void;
  unauthorized(res: express.Response, msg: any): void;
  forbidden(res: express.Response, msg: any): void;
  notFound(res: express.Response, msg: any): void;
  fail(res: express.Response, code: number, msg: any): void;
  isAdmin(role: number): boolean;
  isEmployee(role: number): boolean;
}
