import { Query } from "mongoose";

import UserRepository from "../api/repositories/user.repository";
import { IUser } from "../api/models/user.model";

export default class UserService {
  private userRepository: any = new UserRepository();

  public create(user: IUser): Promise<IUser> {
    return this.userRepository.create(user);
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

  public getEmployeeList(role: number): Query<any> {
    return this.userRepository.getEmployeeList();
  }
}
