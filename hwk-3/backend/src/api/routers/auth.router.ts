import { IRouter, RouterObj } from "../../@types/router";
import AuthController from "../controllers/auth.controller";

export default class AuthRouter implements IRouter {
  private baseUrl: string = "/auth";
  private controller = new AuthController();

  public getCollection(): Array<RouterObj> {
    return [
      {
        path: `${this.baseUrl}/sign-in`,
        action: this.controller.signIn,
        method: "post"
      }
    ];
  }
}
