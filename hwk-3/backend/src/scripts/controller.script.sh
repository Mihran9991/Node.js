file_name_prefix=$1
echo "
import express from 'express';

import BaseController from './base.controller';
import ${file_name_prefix^}Repository from '../repositories/${file_name_prefix}.repository';
import ${file_name_prefix^}Service from '../../services/${file_name_prefix}.service';

export default class ${file_name_prefix^}Controller extends BaseController {
  private ${file_name_prefix}Repository: any;  
  private ${file_name_prefix}Service: any;

  constructor(model: any) {
    super();
    this.${file_name_prefix}Repository = new ${file_name_prefix^}Repository(model);
    this.${file_name_prefix}Service = new ${file_name_prefix^}Service(this.${file_name_prefix}Repository);
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
