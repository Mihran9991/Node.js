import { Router, Request, Response, IRouter } from "express";
import { IFormController } from "../types/form.controller";
import { IUser } from "../types/user";

class FormController implements IFormController {
  public path: string = "/form";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
    this.newFormDataHandler = this.newFormDataHandler.bind(this);
  }

  private initializeRoutes(): void {
    this.router.get(this.path, this.renderForm);
    this.router.post(this.path, this.newFormDataHandler);
  }

  private newFormDataHandler = (req: Request, res: Response): void => {
    const { users } = global;
    if (users) {
      users.push(req.body);
    }

    res.redirect("/results");
  };

  private renderForm(req: Request, res: Response): void {
    res.render("form", {
      title: "Form",
      action: "/form",
      submitBtnValue: "submit",
      fields: [
        { name: "username", type: "text", property: "required" },
        { name: "password", type: "password", property: "required" },
        { name: "gender", type: "text", property: "required" },
        { name: "agree", type: "checkbox", property: "required" }
      ]
    });
  }
}

export default new FormController();
