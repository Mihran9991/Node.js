import mongoose from "mongoose";

import { ILoader } from "../@types/loader";

export default class DBLoader implements ILoader {
  private db_url: string = "mongodb://localhost:27017/MVP";

  public async load() {
    await mongoose.connect(this.db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log("Connected to the database!");
  }
}
