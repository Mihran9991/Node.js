import { Query } from "mongoose";

export interface IRepository<T> {
  delete(id: string): Query<any>;
  getById(id: string): Query<any>;
  create(t: T): Promise<any>;
  update(t: T): Query<any>;
  getEmployeeList(): Query<any>;
  findByFields(fieldsObj: Object): Query<any>;
}
