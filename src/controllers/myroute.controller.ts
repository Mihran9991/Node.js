import { Router, Request, Response, IRouter } from "express";
import { IMyRouteController } from "../types/myroute.controller";

class MyRouteController implements IMyRouteController {
  public path: string = "/myroute";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}/:param`, this.renderMyRoutePage);
  }

  private renderMyRoutePage(req: Request, res: Response): void {
    const { cookies, headers, params, query } = req;

    res.render("myroute", {
      title: "My Route page",
      cookies: Object.entries(cookies),
      headers: Object.entries(headers),
      params: Object.entries(params),
      queryParams: Object.entries(query)
    });
  }
}

export default new MyRouteController();
