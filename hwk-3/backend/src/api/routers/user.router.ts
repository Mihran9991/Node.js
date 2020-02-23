import { IRouter, RouterObj } from "../../@types/router";
import UserController from "../controllers/user.controller";

export default class UserRouter implements IRouter {
  private baseUrl: string = "/user";
  private controller = new UserController();

  public getCollection(): Array<RouterObj> {
    return [
      {
        path: this.baseUrl,
        action: this.controller.create,
        method: "get"
      },
      {
        path: this.baseUrl,
        action: this.controller.edit,
        method: "put"
      },
      {
        path: `${this.baseUrl}/list`,
        action: this.controller.getEmployeeList,
        method: "get"
      },
      {
        path: this.baseUrl,
        action: this.controller.remove,
        method: "delete"
      }
    ];
  }
}
