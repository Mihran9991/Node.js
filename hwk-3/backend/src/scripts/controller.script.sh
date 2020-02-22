file_name_prefix=$1
echo "
import express from 'express';

import BaseController from './base.controller';

export default class $1Controller extends BaseController {
  constructor() {
    super();
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
" >> ../api/controllers/${file_name_prefix}.controller.ts
