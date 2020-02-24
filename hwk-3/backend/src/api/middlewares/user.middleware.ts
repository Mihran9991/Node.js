import { Request, Response, NextFunction } from "express";

import { ROLES } from "../../constants/user.constant";

class UserMiddleware {
  private isAdmin(role: number) {
    return role === ROLES.Admin;
  }

  public checkPermissionsByRole = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { role } = req.user;

    if (!this.isAdmin(role)) {
      return res
        .status(403)
        .send(
          "Employee can't perform ADMIN action. Please check your permissions!"
        );
    }

    next();
  };
}

export default new UserMiddleware();
