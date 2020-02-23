import { IRepository } from "../../@types/repository";
// import userModel from "../models/user.model";

export default class UserRepository implements IRepository<any> {
  private model: any = {};

  public create(arg: any): Promise<any> {}
  public update(arg: any): Promise<void> {}
  public delete(arg: any): Promise<any> {}
  public getById(id: string): Promise<any> {}
}
