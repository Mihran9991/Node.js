import { Router, Request, Response, IRouter } from "express";
import { IDefaultController } from "../types/defaultroute.controller";

class DefaultController implements IDefaultController {
  public path: string = "/";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(this.path, this.renderDefaultPage);
  }

  private renderDefaultPage(req: Request, res: Response): void {
    const { cookies } = req;
    const currentTimeCookieKey = "current-time";

    res.render("default", {
      title: "Hello World",
      currentTimeCookie: cookies[currentTimeCookieKey]
    });
  }
}

export default new DefaultController();
