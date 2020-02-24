import { Query } from "mongoose";
import bcrypt from "bcrypt";

import UserRepository from "../api/repositories/user.repository";
import { IUser } from "../api/models/user.model";

export default class UserService {
  private userRepository: any = new UserRepository();

  public create(user: IUser): Promise<IUser> {
    const { password } = user;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return this.userRepository.create({
      ...user,
      password: hash
    });
  }

  public edit(user: IUser): Query<any> {
    return this.userRepository.update(user);
  }

  public remove(id: string): Query<any> {
    return this.userRepository.delete(id);
  }

  public getById(id: string): Query<any> {
    return this.userRepository.getById(id);
  }

  public getEmployeeList(): Query<any> {
    return this.userRepository.getEmployeeList();
  }
}
