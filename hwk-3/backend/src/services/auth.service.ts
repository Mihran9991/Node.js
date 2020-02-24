import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import UserRepository from "../api/repositories/user.repository";
import { IUser } from "../api/models/user.model";
import { IRepository } from "../@types/repository";
import config from "../configs/app";

export default class AuthService {
  private userRepository: IRepository<IUser> = new UserRepository();

  public signIn = async (userData: IUser) => {
    const { password, email } = userData;
    const user = await this.userRepository.findByFields({
      email
    });

    if (!user) {
      return {
        code: 404,
        message: "User not found!"
      };
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return {
        code: 403,
        message: "Wrong credentials!"
      };
    }

    const token = jwt.sign(
      {
        data: {
          _id: user.id
        }
      },
      config.auth.jwt_secret,
      { expiresIn: "1h" }
    );

    return {
      token
    };
  };
}
