import { IRouter, RouterObj } from "../../@types/router";
import UserController from "../controllers/user.controller";
import UserMiddleware from "../middlewares/user.middleware";
import JWTMiddleware from "../middlewares/jwt.middleware";

export default class UserRouter implements IRouter {
  private baseUrl: string = "/user";
  private controller = new UserController();

  public getCollection(): Array<RouterObj> {
    return [
      {
        path: this.baseUrl,
        action: this.controller.create,
        method: "post",
        middlewares: [JWTMiddleware.verify, UserMiddleware.checkRolePermissions]
      },
      {
        path: this.baseUrl,
        action: this.controller.edit,
        method: "put",
        middlewares: [JWTMiddleware.verify]
      },
      {
        path: `${this.baseUrl}/list`,
        action: this.controller.getEmployeeList,
        method: "get",
        middlewares: [JWTMiddleware.verify, UserMiddleware.checkRolePermissions]
      },
      {
        path: this.baseUrl,
        action: this.controller.remove,
        method: "delete",
        middlewares: [JWTMiddleware.verify, UserMiddleware.checkRolePermissions]
      }
    ];
  }
}
