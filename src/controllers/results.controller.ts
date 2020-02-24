import { Router, Request, Response, IRouter } from "express";
import { IResultsController } from "../types/results.controller";

class ResultsController implements IResultsController {
  public path: string = "/results";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(this.path, this.renderResultsPage);
  }

  private renderResultsPage(req: Request, res: Response): void {
    res.render("results", {
      title: "Results",
      users: global.users
    });
  }
}

export default new ResultsController();
