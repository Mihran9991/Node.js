
file_name_prefix=$1
echo "
import { IRouter, RouterObj } from '../../@types/router';
import ${file_name_prefix^}Controller from '../controllers/${file_name_prefix}.controller'

export default class ${file_name_prefix^}Router implements IRouter {
  private baseUrl: string = '/${file_name_prefix}';
  private controller = new ${file_name_prefix^}Controller();

  public getCollection(): Array<RouterObj> {
    return [{}];
  }
}
" >> ../api/routers/${file_name_prefix}.router.ts

