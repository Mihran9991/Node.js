import { Query } from "mongoose";

import { IRepository } from "../../@types/repository";
import UserModel, { IUser } from "../models/user.model";

export default class UserRepository implements IRepository<IUser> {
  public create(user: IUser): Promise<IUser> {
    console.log(user);
    return new UserModel(user).save();
  }

  public update(user: IUser): Query<any> {
    const { _id } = user;
    return UserModel.updateOne({ _id }, user);
  }

  public delete(_id: string): Query<any> {
    return UserModel.deleteOne({ _id });
  }

  public getById(_id: string): Query<any> {
    return UserModel.findById(_id);
  }

  public getEmployeeList(): Query<any> {
    return UserModel.find();
  }

  public findByFields(fieldObj: Object): Query<any> {
    return UserModel.findOne(fieldObj);
  }
}
