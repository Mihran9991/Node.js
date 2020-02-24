import { Router, Request, Response, IRouter } from "express";
import { IUserController } from "../types/user.controller";
import { IUser } from "../types/user";

class UserController implements IUserController {
  public path: string = "/user";
  public router: IRouter = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(this.path, this.createUser);
    this.router.get(this.path, this.getUsers);
  }

  private createUser(req: Request, res: Response): void {
    const { users } = global;

    if (!users) {
      res.status(404).send("Users not found");
    } else {
      const userData: IUser = req.body;
      users.push(userData);
      res.status(200).send();
    }
  }

  private getUsers(req: Request, res: Response): void {
    const { users } = global;

    if (!users) {
      res.status(404).send("Users not found");
    } else {
      res.status(200).send(users);
    }
  }
}

export default new UserController();
