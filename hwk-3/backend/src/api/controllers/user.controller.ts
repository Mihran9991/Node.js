
import express from 'express';

import BaseController from './base.controller';
import UserRepository from '../repositories/user.repository';
import UserService from '../../services/user.service';

export default class UserController extends BaseController {
  private userRepository: any;  
  private userService: any;

  constructor(model: any) {
    super();
    this.userRepository = new UserRepository(model);
    this.userService = new UserService(this.userRepository);
  }

  public example(req: express.Request, res: express.Response) {
    try {
      // const { ... } = req;
      // ...
      this.ok(res);
    } catch (e) {
      this.clientError(res, e);
    }
  }
}

