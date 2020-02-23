file_name_prefix=$1
echo "
import express from 'express';

import BaseController from './base.controller';
import ${file_name_prefix^}Service from '../../services/${file_name_prefix}.service';

export default class ${file_name_prefix^}Controller extends BaseController {
  private ${file_name_prefix}Service: any = new ${file_name_prefix^}Service();

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
